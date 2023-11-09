<a href="https://blackbox-challenge-oa56.onrender.com">
  <img alt="Next.js 14 and app template Router-ready AI chatbot." src="https://chat.vercel.ai/opengraph-image.png">
  <h1 align="center">Next.js AI Chatbot</h1>
</a>


<p align="center">
  An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Vercel KV.
</p>

<p align="center">
  <a href="#challenges"><strong>Challenges</strong></a> ·
  <a href="#solutions"><strong>Solutions</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Welcome to the Black Box Challenge! The goal of this project is to clone Vercel's Chat AI [https://chat.vercel.ai/](https://chat.vercel.ai/) and enhance it by integrating Google on Tap authentication. For more details, visit [Black Box Challenge](https://blackbox-challenge-oa56.onrender.com).


## Challenges

In this section, I'll discuss the challenges and technical barriers faced during the development process, categorized by difficulty.

### 1. Project Clone Inconsistency
#### 1.1 Project Version
The project faced inconsistencies due to outdated packages and manual version locks, leading to failures. Relevant GitHub issues:
- [Issue 168](https://github.com/vercel-labs/ai-chatbot/issues/168)
- [Issue 154](https://github.com/vercel-labs/ai-chatbot/issues/154)

#### 1.2 Environment Variables
After cloning the project, some essential environment variables were missing.

### 2. Google On Tap
The challenge here was to find an optimal implementation strategy for Google on Tap authentication.

## Solutions

In this section, I'll outline the solutions implemented to address the challenges mentioned above.

### 1. Project Clone Inconsistency
To resolve the inconsistencies, the project underwent updates to ensure compatibility with the desired functionality, as demonstrated in the [example](https://chat.vercel.ai/).

#### 1.1 Packages Upgrade
Key updates included upgrading NextJS to version 14, updating the next-auth version to V5, and addressing other package updates such as "ai," "class-variance-authority," and "openai-edge."

#### 1.2 Environment Variables
After referencing auth-js documentation and Open AI documentation, missing environment variables (e.g., AUTH_SECRET and AUHT_URL) were added.

### 2. Google On Tap
For the Google on Tap authentication feature, three implementation approaches were explored.

#### 2.1 Raw Implementation
A straightforward approach based on [Google Docs](https://developers.google.com/identity/gsi/web/reference/js-reference?hl=pt-br#IdConfiguration).

#### 2.2 Google for JavaScript Implementation
Utilizing the provided JavaScript script for web implementation, detailed [here](https://developers.google.com/identity/gsi/web/reference/js-reference?hl=pt-br#IdConfiguration).

#### 2.3 NPM Package
Considering a third-party library, [@react-oauth/google], ultimately opting for the 2.2 implementation for comprehensive documentation and avoiding unnecessary NPM packages.

## Running Locally

To run the Next.js AI Chatbot locally, follow these steps:

1. Configure the environment variables by creating a `.env.local` and copying the variables from `.env.example`
2. Run the code below

```bash
npm install
npm run dev
```
The app template should now be accessible at localhost:3000.

## Author

This challenge was created by Vinicius Okamoto

- Vinicius Okamoto ([@linkedin](https://www.linkedin.com/in/viniciusokamoto/))