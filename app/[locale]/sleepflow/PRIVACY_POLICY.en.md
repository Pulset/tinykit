# SleepFlow Privacy Policy

> Effective date: June 22, 2026

> **Controlling Language:** This Privacy Policy is written in English. Any translation is provided for convenience only. In the event of any conflict or inconsistency between the English version and a translation, the English version shall govern.

This Privacy Policy explains how SleepFlow ("we," "us," or "the App") collects, uses, stores, shares, and protects your personal information. Please read this Policy carefully and in full before using the App.

**Important before you begin: SleepFlow is a white noise / ambient sound playback and AI audio generation app intended for sleep assistance. It is NOT a medical device and does not provide any medical diagnosis, treatment, or health advice.**

---

## 1. Information We Collect

We follow a "data minimization" principle and only collect information necessary to provide the Service.

### 1.1 Information you provide
- **AI audio generation prompts**: The text you enter to describe a sound when using the AI audio generation feature.
- **Mix configurations / saved items**: Sound mixes you create and audio you save.

### 1.2 Information from third-party sign-in
- **Sign in with Apple**: If you choose to sign in with Apple, Apple provides us with an anonymized, app-scoped user identifier. **We do not receive or store your Apple ID, real name, or email address** — unless you actively choose to share your real email during the Apple sign-in flow, in which case we receive that email.

### 1.3 Automatically collected information
When you use the App or the AI audio generation feature, we may automatically record:
- Basic device information such as device model, operating system version, language, and time zone;
- Service call logs (e.g., request counts, timestamps, error codes) for usage accounting and reliability.
- **We do NOT collect**: precise location, contacts, photo library, microphone recordings, or health data. The App does not record your voice.

---

## 2. How We Use Information

1. **Provide core features**: Play white noise, save your mixes and favorites, and provide AI audio generation.
2. **Account & usage management**: Identify you and count your monthly AI audio generations (subscribers receive a monthly allocation of 5 generations).
3. **Subscription services**: Verify your subscription status and provide the corresponding entitlements.
4. **Service improvement & reliability**: Analyze error logs, troubleshoot, and maintain availability.
5. **Customer support**: Respond to your questions and feedback.

We will **not** use your information for personalized advertising or sell your information to anyone.

---

## 3. AI Audio Generation — Special Notice

When you use AI audio generation, your input text is processed through the following flow, which you should be aware of:

1. **Machine translation**: To help the AI model better understand your description, your prompt may first be translated into English by a machine translation model integrated into our backend (running on Cloudflare's AI service). This step happens within the Cloudflare network; your prompt text is not sent to any additional third party for translation.
2. **AI model generation**: The translated text is sent to a third-party AI audio model service (ElevenLabs, located in the United States) to generate audio.
3. **Storage & playback**: The generated audio file is stored in a cloud object storage service (Cloudflare R2, located in the United States) so you can play and download it later, until you delete it or it is cleaned up after a period of time.

**This means your prompt text (after translation) is transmitted to AI and storage services located in the United States.** We require all third-party processors to keep your information confidential and secure; however, privacy protection standards may differ between countries/regions.

**We do not manually review the content you enter**, except to troubleshoot technical issues or where required by law or competent authorities.

---

## 4. Sharing and Disclosure of Information

We do not sell your personal information to any third party. We only share information in the following circumstances:

### 4.1 Service providers (data processors)
We use the following third parties to provide the Service. They process information necessary for the purposes described in this Policy:

| Provider | Purpose | Location |
| --- | --- | --- |
| **Apple Inc.** | Sign in with Apple; in-app purchase and subscription billing | United States |
| **RevenueCat, Inc.** | Subscription status management (anonymous identifier and subscription credentials only) | United States |
| **ElevenLabs** | AI audio model generation (receives translated prompt text) | United States |
| **Cloudflare, Inc.** | Backend hosting, database, prompt translation (Workers AI), and audio file storage (R2) | United States |

Each provider has its own privacy policy. We are not responsible for how they use your information under their own policies.

### 4.2 Legal requirements
To comply with laws and regulations, respond to lawful requests from competent authorities, and protect our rights and the public interest, we may disclose your information to the extent necessary.

### 4.3 Business changes
In the event of a merger, acquisition, or asset transfer, your information may be transferred as an asset; we will notify you via in-app notice or other reasonable means.

---

## 5. International Data Transfer

Because our Service relies on providers located in the United States (ElevenLabs, RevenueCat, Cloudflare, Apple), some of your personal information — primarily AI audio generation prompts, your anonymous identifier, and subscription credentials — will be transferred to, and processed in, the United States.

If you are located **outside the United States**, please be aware that the data protection laws of the United States may differ from those of your country or region. By using the AI audio generation and other features that require such transfer, you consent to the transfer and processing of your information in the United States as described in this Policy.

For users in the **European Union, the United Kingdom, and California**, please see the "Your Rights" section below for additional protections.

---

## 6. Data Storage and Security

### 6.1 Retention
- We keep your information only for as long as necessary to provide the Service.
- Your AI-generated audio and records are retained until you actively delete them or for a period after account deletion.
- Log data kept beyond the necessary period is deleted or anonymized.

### 6.2 Storage location
Your information is primarily stored on the U.S.-based servers of the providers listed above.

### 6.3 Security measures
We take reasonable technical and organizational measures (such as HTTPS encryption in transit and access controls) to protect your information. However, no internet transmission is fully secure, and we cannot guarantee 100% security. In the event of a personal data security incident, we will notify you as required by applicable law.

---

## 7. Children

The App is not directed at children under 13, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with information, please contact us and we will delete it.

---

## 8. Your Rights

Depending on applicable law, you may have the following rights:

- **Access** your personal information;
- **Correct or update** inaccurate information;
- **Delete** your personal information or deactivate your account;
- **Withdraw consent** (which may make some features unavailable);
- **Obtain / port** a copy of your data;
- **Object to automated decision-making**.

To exercise these rights, contact us using the details at the end of this Policy. We will respond within a reasonable period (generally no more than 30 days).

### 8.1 EU / UK users (GDPR)
If you are located in the European Union or the United Kingdom, under the GDPR you additionally have the right to object to certain processing, restrict processing, lodge a complaint with your local data protection authority, and request that your data be transferred to another controller. The legal bases on which we process your information are: performance of a contract (providing the Service), consent, and legitimate interests. International transfers rely on Standard Contractual Clauses (SCCs) or other appropriate safeguards.

### 8.2 California users (CCPA / CPRA)
If you are a California resident, under the CCPA/CPRA you have the right to know what personal information we collect, request deletion, opt out of the "sale" or "sharing" of your personal information, and not be discriminated against for exercising these rights. **We do not sell or share your personal information as those terms are defined by California law.** To submit a request, contact us using the details below.

### 8.3 "Do Not Sell or Share My Personal Information"
We do not sell or share your personal information for cross-context behavioral advertising. No opt-out is necessary; we do not engage in these practices.

---

## 9. Cookies and Similar Technologies

The App (mobile) does not use browser cookies itself. Backend services may use necessary logs and anonymous technical metrics for security and reliability, and do not use them for cross-app tracking.

---

## 10. Third-Party Links

The App may contain links to third parties (such as Apple, ElevenLabs). We are not responsible for the content or privacy practices of third parties; please review their respective privacy policies.

---

## 11. Updates to This Policy

We may update this Policy from time to time. When we do, we will provide the revised Policy in the App or on this page and update the "Effective date" at the top. In the case of material changes, we will notify you through reasonable means (such as an in-app notice).

---

## 12. Contact Us

If you have any questions, suggestions, or complaints about this Policy or the protection of your personal information, please contact us:

- **Email**: `[enter your public contact email]`
- **App Store developer**: `[enter your developer/individual name as shown in App Store Connect]`

We will process your request as soon as possible after receiving it.

---

*This Policy was last updated on: June 22, 2026.*
