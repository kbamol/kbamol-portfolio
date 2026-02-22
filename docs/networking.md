# Networking Setup: Hostinger to AWS

## 1. Domain Purchase
- **Provider:** Hostinger
- **Domain:** amolbhavar.tech

## 2. AWS Route 53 (DNS Management)
I am using Route 53 to manage my DNS because it integrates perfectly with AWS CloudFront and SSL certificates.
- Created a **Public Hosted Zone**.
- Copied the 4 **Name Servers (NS)** provided by AWS.

## 3. Connecting the Two
- Went to Hostinger Dashboard > Domains > amolbhavar.tech.
- Changed Nameservers from Hostinger's default to the AWS NS records.
- **Status:** Pending propagation (can take 24 hours).

## 4. Troubleshooting
To check if the connection is live, run this in the Mac terminal:
`dig amolbhavar.tech ns`

## 5. SSL Certificate
To ensure the data is encrypted over HTTP, a free SSL certificate is requested by AWS ACM.
