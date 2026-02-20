"use client";

import { createContext, useCallback, useContext, useMemo, type ReactNode, useState } from "react";

type ActionKind = "deposit" | "withdraw";

type TxProof = {
	txId: string;
	kind: ActionKind;
	runeId: string;
	amount: string;
	timestamp: string;
	status: "success" | "error";
	reason?: string;
};

type TxProofContextValue = {
	proofs: TxProof[];
	recordSuccess: (proof: Omit<TxProof, "timestamp" | "status">) => void;
	recordError: (kind: ActionKind, runeId: string, amount: string, reason: string) => void;
};

const TxProofContext = createContext<TxProofContextValue | null>(null);

export function TxProofProvider({ children }: { children: ReactNode }) {
	const [proofs, setProofs] = useState<TxProof[]>([]);

	const recordSuccess = useCallback((proof: Omit<TxProof, "timestamp" | "status">) => {
		const entry: TxProof = {
			...proof,
			status: "success",
			timestamp: new Date().toISOString(),
		};
		setProofs((prev) => [entry, ...prev].slice(0, 5));
	}, []);

	const recordError = useCallback((kind: ActionKind, runeId: string, amount: string, reason: string) => {
		const entry: TxProof = {
			txId: "-",
			kind,
			runeId,
			amount,
			reason,
			status: "error",
			timestamp: new Date().toISOString(),
		};
		setProofs((prev) => [entry, ...prev].slice(0, 5));
	}, []);

	const value = useMemo(
		() => ({
			proofs,
			recordSuccess,
			recordError,
		}),
		[proofs, recordSuccess, recordError],
	);

	return <TxProofContext.Provider value={value}>{children}</TxProofContext.Provider>;
}

export function useTxProof() {
	const ctx = useContext(TxProofContext);
	if (!ctx) {
		throw new Error("useTxProof must be used within TxProofProvider");
	}
	return ctx;
}
