## 1. Install npm in local system
'check the process'

## 2. Install Next.js
npx create-next-app@latest .

## 3. Verification
npm run dev


## Enviroment in AWS
- Architecture Plan (S3 + CloudFront)
This is the most "Economic" and "Modern" way to host a Next.js site. It is also much faster for users.

Build your Next.js site: You run npm run build which creates a folder of static files.

Upload to S3: We sync these files to a private S3 bucket.

Distribute via CloudFront: CloudFront fetches files from S3 and serves them over HTTPS to your domain.

- Storage
1. Go to the S3 Console.

2. Create a bucket named amolbhavar-portfolio-storage (Name must be unique).

3. Region: Choose the one closest to you (e.g., us-east-1 or eu-central-1).

4. Block all public access: Keep this checked (We will use a special "CloudFront" key to let people in later).

