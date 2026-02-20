"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useTxProof } from "./TxProofContext";

const EXPLORER = "https://blockscout.staging.midl.xyz/tx";

const pretty = (n = "") => (n.length > 10 ? `${n.slice(0, 6)}...${n.slice(-6)}` : n);

export function TxProofPanel() {
	const { proofs } = useTxProof();

	if (!proofs.length) {
		return null;
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-sm">Latest On-chain Proof</CardTitle>
				<CardDescription>
					Each completed action is recorded with tx id, rune id and status
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				{proofs.map((proof, index) => {
					const isSuccess = proof.status === "success";
					return (
						<div key={`${proof.txId}-${index}`} className="rounded-lg border px-3 py-2 text-sm">
							<div className="mb-1 flex items-center justify-between gap-2">
								<strong>{proof.kind.toUpperCase()}</strong>
								<span
								className={`rounded px-2 py-0.5 text-xs ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
								>
									{proof.status}
								</span>
							</div>
							<div>Rune: {pretty(proof.runeId)}</div>
							<div>Amount: {proof.amount}</div>
							{proof.txId !== "-" && (
								<div className="flex items-center justify-between gap-2">
									<a
										target="_blank"
										rel="noreferrer"
										href={`${EXPLORER}/${proof.txId}`}
										className="text-blue-500 hover:text-blue-700"
									>
										{proof.txId}
									</a>
									<Button
										type="button"
										size="sm"
										onClick={() => navigator.clipboard.writeText(proof.txId)}
									>
										Copy
									</Button>
								</div>
							)}
							{proof.reason && <div className="text-red-700">{proof.reason}</div>}
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}
