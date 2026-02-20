# MIDL VibeHack 제출 패키지 (Sleep Pack)

에드몽이 자는 동안 내가 대신 준비해둘 실행 패키지입니다.

## 목표
- Xverse 연결 + 1회 on-chain action + tx proof + 제출물 산출
- 2~3시간 내 데모 제출 가능 상태로 정리

## 실행 순서 (복붙용)

1) 의존성 설치
```bash
cd /Users/silkroadcat/.openclaw/workspace/projects/midl-vibehack/dapp-demo
pnpm install
```

2) 새 지갑으로 실행 준비
- Xverse 새 지갑 생성
- `faucet.staging.midl.xyz`에서 소액 수신

3) 계약 배포 (필요 시)
```bash
cd packages/contracts
npx hardhat vars set MNEMONIC  # 지갑 니모닉 입력
pnpm hardhat deploy --network regtest
```

4) dApp 실행
```bash
cd ../apps/dapp
pnpm dev
```

5) 데모 시나리오
- Connect → Deposit(또는 Withdraw) 1회
- tx hash + success 로그 캡처
- block explorer 링크 확인: `https://blockscout.staging.midl.xyz`

6) 증빙 정리
- tx hash 1개
- explorer 링크 1개
- 데모 영상 60~120초 (필수)
- README/GitHub 링크

## 제출 폼에 넣을 핵심 문구
- Onchain action is verified by hash + explorer proof
- Users can connect wallet, execute one action, and get explicit tx evidence
- Proof-first UX: action preview + guardrail + transaction result panel

## 실패 대비 체크
- 지갑 잔액 부족: faucet 재요청
- 네트워크 불일치: MIDL regtest/staging 확인
- 컨트랙트 주소 미연결: 배포 출력 주소 반영
- 실행 실패: 실패 사유를 화면에 명확히 출력
