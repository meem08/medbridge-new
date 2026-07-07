# MedBridge

**Bridging Lives, Saving Futures** — An AI-powered platform connecting blood donors, hospitals, and blood banks for emergency blood coordination.

## Overview

MedBridge is a mobile-first web application that streamlines the lifecycle of blood donation and emergency blood supply management. Built from detailed UI mockups, the app serves three user roles — **Blood Donors**, **Hospitals**, and **Blood Banks** — each with a tailored interface for their specific needs.

## Features

### For Blood Donors
- **Onboarding** — 3-slide introduction to the platform
- **Account Management** — Sign up, login, password recovery, and email verification
- **Role Selection** — Choose your path: Donor, Hospital, or Blood Bank
- **Dashboard** — View blood type, eligibility status, donation history, achievements, and certificates
- **Emergency Alerts** — Receive nearby urgent blood requests with AI-matched priority scores
- **Appointment Booking** — Search blood banks, browse a calendar, and select donation time slots
- **Impact Tracking** — Monitor lives saved, donation count, and unlock achievement badges

### For Hospitals
- **Hospital Account** — Sign up and login with hospital credentials
- **Emergency Dashboard** — View KPI metrics (requests, availability, active deliveries with AI-optimized ETAs)
- **Emergency Blood Request** — Submit urgent requests with blood type, ward, units, and clinical priority level; powered by AI matching engine
- **Real-Time Match Tracking** — Track request progress through 4 stages (Submitted → Checked → Matched → Confirmation) with live log feed
- **Inventory Overview** — Quick-view active blood inventory levels for common types
- **Notifications** — Receive critical low-stock alerts with Initiate/Dismiss actions
- **Settings & Profile** — Manage hospital info, emergency preferences (toggles), staff, and compliance certificates

### For Blood Banks
- **Dashboard** — Monitor total units, pending requests, low stock alerts, and today's donations
- **Inventory Management** — Full blood-type inventory list with status indicators (Adequate / Low / Critical)
- **Request Management** — View and process incoming hospital requests with status tracking (Matching / Reserved / Complete)
- **Donation Verification** — Review donor info, donation details, and screening results with Pass/Fail indicators

### Cross-Cutting Features
- **AI-Powered Matching** — Neural network scan across regional blood banks with live match status
- **Chat Bot FAB** — Floating action button for instant assistance on any screen
- **Bottom Navigation** — Consistent 5-tab navigation (Home/Donor) or 4-tab (Blood Bank) across all post-login screens
- **Notification Center** — Filterable tabs (All, Critical, Alerts, Nearby, Emergency) with AI match percentages and ETA

## Screens

| # | Screen | ID | Role |
|---|--------|----|------|
| 1 | Splash Screen | `splash` | All |
| 2 | Onboarding (3 slides) | `onboarding` | All |
| 3 | Role Selection | `role` | All |
| 4 | Donor Sign Up | `donor-signup` | Donor |
| 5 | Donor Login | `donor-login` | Donor |
| 6 | Forgot Password | `forgot-password` | All |
| 7 | Email Verification | `email-verification` | All |
| 8 | Reset Password | `reset-password` | All |
| 9 | Donor Dashboard | `donor-dashboard` | Donor |
| 10 | Donor Appointment Booking | `donor-appointment` | Donor |
| 11 | Donor Notifications | `donor-notifications` | Donor |
| 12 | Hospital Sign Up | `hospital-signup` | Hospital |
| 13 | Hospital Login | `hospital-login` | Hospital |
| 14 | Hospital Emergency Dashboard | `hospital-dashboard` | Hospital |
| 15 | Hospital Emergency Request | `hospital-request` | Hospital |
| 16 | AI Match Tracking | `match-tracking` | Hospital/BB |
| 17 | Blood Bank Dashboard | `bloodbank-dashboard` | Blood Bank |
| 18 | Blood Bank Inventory | `bloodbank-inventory` | Blood Bank |
| 19 | Hospital Settings/Profile | `hospital-settings` | Hospital/BB |
| 20 | Hospital Notifications | `hospital-notifications` | Hospital |
| 21 | Donation Verification | `donation-verification` | Blood Bank |

## Tech Stack

- **HTML5** — Semantic markup with inline SVG icons
- **CSS3** — Custom properties, Flexbox, Grid, animations, mobile-first responsive design
- **Vanilla JavaScript** — SPA-style routing, DOM manipulation, form interactions, timer/countdown logic

No frameworks or external libraries — the app is built entirely with native web technologies.

## Design

The UI is based on a set of 27 Figma mockup screens. The visual design follows a clean medical app aesthetic:

- **Primary Color:** Deep red `#C00000` for buttons, alerts, and key accents
- **Dark Blue:** `#002060` for splash screen and toggle switches
- **Background:** Clean white/off-white for readability
- **Status Colors:** Green (Pass/Adequate), Red (Critical/Low), Yellow/Orange (Warnings)
- **Typography:** System sans-serif (SF Pro / Roboto) for native feel
- **Layout:** 430px max-width container, mobile-first with responsive desktop support

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd medbridge
   ```

2. Serve the files using any static file server. For example:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

### Usage Flow

1. **Splash** — App launches with animated splash screen (2.5s)
2. **Onboarding** — Swipe/click through 3 informational slides, then tap "Next"
3. **Log In** — Click "Already Have An Account? Log In" to go directly to login
4. **Role Selection** — Choose your role (Donor, Hospital, or Blood Bank)
5. **Sign Up / Log In** — Create an account or sign in to access the dashboard
6. **Dashboard** — Explore the feature set relevant to your role

### Design Mockups

The `*.png` files in the project root are the original Figma design mockups that this app was built from. They serve as the visual reference for each screen.

## Project Structure

```
medbridge/
├── index.html          # Main HTML file with all 21 screens
├── styles.css          # Complete CSS stylesheet
├── app.js              # JavaScript application logic
├── README.md           # This file
├── splash.png          # Splash screen mockup
├── 2. Onbaording 1 .png
├── 3. Onbaording 2.png
├── 4. Onbaording 3 .png
├── 5. Donor Authentication.png
├── ... (27 PNG mockups)
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari / Chrome (iOS/Android)

## License

(c) 2024 MedBridge. All rights reserved.

---

*Built from Figma design mockups. All design assets are provided for reference purposes.*
