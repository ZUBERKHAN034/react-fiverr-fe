const constants = {
  ENUMS: {
    BE_BASE_URL: "http://localhost:8002/",
    IP_INFO_URL: "https://ipinfo.io/json?token=",

    SORT: {
      ASC: "asc",
      DESC: "desc",
    },

    ORDER_BY: {
      NEWEST: "createdAt",
      BEST_SELLING: "sales",
    },

    ROLE: {
      USER: "user",
      ADMIN: "admin",
      SELLER: "seller",
      BUYER: "buyer",
    },

    ASSETS: {
      VIDEOS: {
        PROMO:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/videos/promo.mp4",
      },

      IMAGES: {
        AVATAR:
          "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
        POSTER:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/me.png",
        POSTER_BUSINESS:
          "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-836-x1.png",
      },

      ICONS: {
        SEARCH:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/search.svg",
        ACCESSIBILITY:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/accessibility.svg",
        CHAT: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/chat.svg",
        CHECK:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/check.svg",
        CLOCK:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/clock.svg",
        COIN: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/coin.svg",
        DELETE:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/delete.svg",
        DISLIKE:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/dislike.svg",
        DOWN: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/down.svg",
        FACEBOOK:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/facebook.svg",
        GREEN_CHECK:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/greencheck.svg",
        HEART:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/heart.svg",
        INSTAGRAM:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/instagram.svg",
        LANGUAGE:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/language.svg",
        LIKE: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/like.svg",
        LINKEDIN:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/linkedin.svg",
        PINTEREST:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/pinterest.svg",
        RECYCLE:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/recycle.svg",
        STAR: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/star.svg",
        TWITTER:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/twitter.svg",
        EXIT: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/exit.svg",
        MESSAGES:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/messages.svg",
        ORDERS:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/orders.svg",
        ADD: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/add.svg",
        VERIFIED:
          "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/verified.svg",
        HOME: "https://s3-bucket-public.s3.us-east-005.backblazeb2.com/fiverr/assets/images/home.svg",
      },

      TRUSTED_BY: {
        FACEBOOK_LOGO:
          "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png",
        GOOGLE_LOGO:
          "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png",
        NETFLIX_LOGO:
          "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png",
        PNG: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png",
        PAYPAL_LOGO:
          "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png",
      },
    },
  },

  RESP_ERR_CODES: {
    ERR_400: 400,
    ERR_401: 401,
    ERR_422: 422,
    ERR_500: 500,
    ERR_403: 403,
    ERR_404: 404,
    ERR_405: 405,
    ERR_409: 409,
    ERR_410: 410,
    ERR_412: 412,
    ERR_NETWORK: "ERR_NETWORK",
  },

  ERROR_MESSAGES: {
    NO_COVER_SELECTED: "Please select your Cover image!",
    GOOGLE_LOGIN_FAILED: "Google Login Error!",
    NO_GENDER_SELECTED: "Please select your gender!",
    FEATURE_ADD_LIMIT_REACHED: "You can only add maximum 5 features!",
    FEATURE_NOT_VALID: "Please enter a feature before add!",
    ORDER_CANCEL:
      "Order canceled -- continue to shop around and checkout when you're ready.",
    NOT_AUTHORIZED: "You are not authorized",
    USER_NOT_FOUND: "User not found.",
    USER_ALREADY_EXISTS: "User already exists",
    INVALID_PASSWORD: "Invalid Password",
    RECORD_NOT_FOUND: "Record not found.",
    PASSWORD_NOT_MATCHED: "Password not matched",
    SAME_OLD_PASSWORD: "Same as old",
    PRODUCT_NOT_FOUND: "Product not found",
    NOT_SUBSCRIBED: "Not subscribed or no active plan",
    ALREADY_SUBSCRIBED: "Already subscribed to a plan",
    ALREADY_PURCHASED: "Already purchased",
    SUBSCRIPTION_EXPIRED: "Subscription expired",
    PRODUCT_IS_ALREADY_DOWNLOADED: "Product is already downloaded",
    LIMIT_REACHED: "Limit reached",
    HASH_EXPIRED: "Hash expired",
    HASH_NOT_FOUND: "Link is expired.",
    ADDRESS_NOT_FOUND: "User billing address not found.",
    SESSIONS_NOT_FOUND: "Stripe session_id not found.",
    PAYMENT_PENDING: "Payment Pending.",
    PLAN_NOT_FOUND: "Plan not found.",
    FORGOT_PASSWORD_REQUEST: `The account currently has no password set. We recommend requesting a 'Forgot Password'.`,
  },

  SUCCESS_MESSAGES: {
    ACCOUNT_VERIFIED: "Your account has been verified",
    PROFILE_COMPLETED: "Profile completed successfully",
    GIG_DELETE: "Gig deleted successfully",
    FAV_REMOVE: "Gig remove from My Favorites",
    GIG_ADD: "New Gig added successfully",
    REVIEW_DELETE: "Review deleted successfully",
    ORDER_SUCCESS: "🎉 Order placed! You will redirecting to Orders page.",
    EMAIL_SEND: "Email send successfully",
    OK: "OK",
    REGISTERED: "Registered",
    PASSWORD_CHANGED: "Password changed",
    PASSWORD_SET: "Password set successfully",
    PASSWORD_RESET: "Password reset successfully",
    EMAIL_UPDATED: "Email updated successfully",
    USER_LOGGED_OUT: "User logged out successfully",
    USER_LOGGED_IN: "User logged in successfully",
  },

  INS_EXCLUDE_COLS: ["created_at", "updated_at", "deleted_at"],

  ROUTES: {
    NOT_FOUND: "*",
    EXPLORE: "https://business.fiverr.com/business/",
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    GIGS: "/gigs",
    ORDERS: "/orders",
    MY_GIGS: "/my-gigs",
    MY_FAVORITES: "/my-favorites",
    ADD: "/add",
    MESSAGES: "/messages",
    GIG: "/gig/",
    GIG_WITH_ID: "/gig/:id",
    MESSAGE: "/message/",
    MESSAGE_WITH_ID: "/message/:id",
    ACCOUNT: "/account/",
    ACCOUNT_WITH_ID: "/account/:id",
    SETUP_ACCOUNT: "/setup-account",
    ACCOUNT_VERIFY_WITH_HASH: "/account-verify/:hash",
    ACCOUNT_VERIFY: "/account-verify/",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD_WITH_HASH: "/reset-password/:hash",
    RESET_PASSWORD: "/reset-password/",
    LINKS: "/links",
  },

  LOCAL_STORAGE: {
    CURRENT_USER: "currentUser",
  },

  PARAMS: {
    IMAGE_UPLOADING: {
      pending: "Uploading image...",
      success: "Image uploaded successfully!",
      error: "Failed to upload image. Please try again.",
    },
    COVER_UPLOADING: {
      pending: "Uploading cover image...",
      success: "Cover image uploaded successfully!",
      error: "Failed to upload cover image. Please try again.",
    },
    IMAGES_UPLOADING: {
      pending: "Uploading multiple images...",
      success: "Multiple images uploaded successfully!",
      error: "Failed to upload multiple images. Please try again.",
    },
    PAYMENT_PROCESSING: {
      pending: "Payment link processing...",
      success: "Redirecting to checkout page...",
    },
  },

  REDUCERS: {
    ADD_GIG: {
      ACTION_TYPES: {
        CHANGE_INPUT: "CHANGE_INPUT",
        ADD_IMAGES: "ADD_IMAGES",
        ADD_FEATURE: "ADD_FEATURE",
        REMOVE_FEATURE: "REMOVE_FEATURE",
      },
    },
  },

  CATEGORIES: {
    AI_ARTISTS: "ai-artists",
    AI_SERVICES: "ai-services",
    BUSINESS: "business",
    DIGITAL_MARKETING: "digital-marketing",
    GRAPHICS_DESIGN: "graphics-design",
    ILLUSTRATION: "illustration",
    LOGO_DESIGN: "logo-design",
    MUSIC_AUDIO: "music-audio",
    PHOTOGRAPHY: "photography",
    PROGRAMMING_TECH: "programming-tech",
    SEO: "seo",
    SOCIAL_MEDIA: "social-media",
    VIDEO_ANIMATION: "video-animation",
    VIDEO_EXPLAINER: "video-explainer",
    VOICE_OVER: "voice-over",
    WEB_DEVELOPMENT: "web-development",
    WORDPRESS: "wordpress",
    WRITING_TRANSLATION: "writing-translation",
  },
};

export default constants;
