const App = {
  currentScreen: 'splash',
  onboardingIndex: 0,
  codeInputIndex: 0,
  userRole: null,
  splashTimer: null,
  resendTimer: null,
  resendSeconds: 20,

  init() {
    this.showScreen('splash');
    this.splashTimer = setTimeout(() => {
      this.showScreen('onboarding');
    }, 2500);
    this.setupBottomNav();
  },

  setupBottomNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const screen = item.dataset.screen;
        if (screen) {
          this.goTo(screen);
        }
      });
    });
  },

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`screen-${id}`);
    if (screen) {
      screen.classList.add('active');
      screen.scrollTop = 0;
    }
    this.currentScreen = id;
  },

  goTo(id) {
    this.showScreen(id);
  },

  // ---------- Onboarding ----------
  nextOnboarding() {
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.dot');
    const btn = document.querySelector('.onboarding-btn');

    slides[this.onboardingIndex].classList.remove('active');
    this.onboardingIndex++;

    if (this.onboardingIndex < slides.length) {
      slides[this.onboardingIndex].classList.add('active');
      dots.forEach((d, i) => d.classList.toggle('active', i === this.onboardingIndex));
      btn.textContent = 'Next';
    } else {
      this.goTo('role');
      this.onboardingIndex = 0;
      slides[0].classList.add('active');
      dots[0].classList.add('active');
      dots.forEach((d, i) => d.classList.remove('active'));
      dots[0].classList.add('active');
      btn.textContent = 'Next';
    }
  },

  // ---------- Role ----------
  selectRole(role) {
    this.userRole = role;
    if (role === 'donor') {
      this.goTo('donor-signup');
    } else if (role === 'hospital') {
      this.goTo('hospital-signup');
    } else if (role === 'bloodbank') {
      this.showToast('Blood Bank flow: Redirecting to dashboard...');
      setTimeout(() => this.goTo('bloodbank-dashboard'), 500);
    }
  },

  // ---------- Auth ----------
  signUp(type) {
    if (type === 'donor') {
      this.showToast('Account created successfully!');
      setTimeout(() => this.goTo('donor-dashboard'), 600);
    } else if (type === 'hospital') {
      this.showToast('Hospital account created!');
      setTimeout(() => this.goTo('hospital-dashboard'), 600);
    }
  },

  login(type) {
    if (type === 'donor') {
      this.showToast('Welcome back!');
      setTimeout(() => this.goTo('donor-dashboard'), 600);
    } else if (type === 'hospital') {
      this.showToast('Logged in successfully!');
      setTimeout(() => this.goTo('hospital-dashboard'), 600);
    }
  },

  logout() {
    this.showToast('Logged out.');
    this.userRole = null;
    setTimeout(() => this.goTo('role'), 500);
  },

  // ---------- Verification Code ----------
  moveCodeInput(input, event) {
    const isDigit = /^\d$/.test(event.key);
    if (isDigit) {
      input.value = event.key;
      const next = input.parentElement.querySelectorAll('.code-box');
      const idx = Array.from(next).indexOf(input);
      if (idx < next.length - 1) {
        next[idx + 1].focus();
      }
    } else if (event.key === 'Backspace' && input.value === '') {
      const prev = input.parentElement.querySelectorAll('.code-box');
      const idx = Array.from(prev).indexOf(input);
      if (idx > 0) {
        prev[idx - 1].focus();
        prev[idx - 1].value = '';
      }
    }
  },

  appendCode(digit) {
    const boxes = document.querySelectorAll('.code-box');
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].value === '') {
        boxes[i].value = digit;
        if (i < boxes.length - 1) {
          boxes[i + 1].focus();
        }
        break;
      }
    }
    this.checkCodeComplete();
  },

  deleteCode() {
    const boxes = document.querySelectorAll('.code-box');
    for (let i = boxes.length - 1; i >= 0; i--) {
      if (boxes[i].value !== '') {
        boxes[i].value = '';
        boxes[i].focus();
        break;
      }
    }
  },

  checkCodeComplete() {
    const boxes = document.querySelectorAll('.code-box');
    const code = Array.from(boxes).map(b => b.value).join('');
    if (code.length === 4) {
      this.showToast('Verifying code...');
      setTimeout(() => {
        this.startResendTimer();
        this.showToast('Code verified!');
        setTimeout(() => this.goTo('reset-password'), 500);
      }, 800);
    }
  },

  startResendTimer() {
    this.resendSeconds = 20;
    const timerEl = document.getElementById('resend-timer');
    if (!timerEl) return;
    timerEl.textContent = `${this.resendSeconds} Sec`;
    clearInterval(this.resendTimer);
    this.resendTimer = setInterval(() => {
      this.resendSeconds--;
      timerEl.textContent = `${this.resendSeconds} Sec`;
      if (this.resendSeconds <= 0) {
        clearInterval(this.resendTimer);
        timerEl.textContent = 'Resend Now';
      }
    }, 1000);
  },

  // ---------- Priority ----------
  selectPriority(el) {
    document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  },

  // ---------- Emergency Request ----------
  submitEmergencyRequest() {
    this.showToast('Emergency request submitted! AI matching in progress...');
    setTimeout(() => this.goTo('match-tracking'), 800);
  },

  // ---------- Toast ----------
  showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());