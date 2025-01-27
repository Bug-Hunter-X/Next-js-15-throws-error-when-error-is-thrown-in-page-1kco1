# Next.js 15 Unhandled Error in Page

This repository demonstrates an uncommon error in Next.js 15 where throwing an error within a page component results in an unhandled error, making debugging difficult.

## Bug Description
Throwing an error inside a page component leads to an unexpected error response. This differs from previous Next.js versions, where a custom error page could usually handle this gracefully.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You'll observe that Next.js does not display a standard error page, making it challenging to diagnose the problem if this occurs during application use. 

## Solution
The solution involves a more robust error handling mechanism within Next.js using the `getStaticProps` or `getServerSideProps` functions, which enables better control over error responses.