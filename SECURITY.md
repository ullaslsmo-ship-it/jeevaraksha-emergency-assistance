# Security Policy

## Release Status
**JeevaRaksha v13.1.3** is an **`ACADEMIC PROTOTYPE — TESTING REQUIRED`**.

## Security Architecture & Known Boundaries
1. **Unencrypted Local Storage:** Browser `localStorage` and `IndexedDB` are plaintext browser storage. Do not treat them as encrypted vaults.
2. **Unencrypted Public QR Codes:** Emergency QR codes are intentionally readable offline by any bystander scanner and are **never** encrypted or cryptographically authenticated.
3. **Zero Medical Data in URLs:** Medical conditions and ICE phone numbers are never embedded in URL query strings.
4. **Untrusted QR Input Handling:** All scanned QR payloads are treated as untrusted text, capped at 8,192 bytes, rejected on dangerous URI schemes (`javascript:`, `vbscript:`, `data:`, `file:`, `about:`), sanitized via `sanitizePlainText`, and rendered via React text escaping (zero `dangerouslySetInnerHTML`, `.innerHTML`, or `eval`).

## Reporting a Vulnerability
Please open a private security advisory on GitHub Security Advisories for this repository (do not publish active exploits in public issues). Include steps to reproduce, affected browser/OS, and potential impact.
