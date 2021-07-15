<template>
  <footer>
    <ul>
      <li>
        © 2021 Trippo, Inc.
      </li>
      <li>
        Explore
      </li>
      <li>
        About us
      </li>
      <li>
        Profile
      </li>
    </ul>

    <ul>
      <li class="lang">
        <span class="material-icons">
          language
        </span>
        <small>
          English (US)
        </small>
      </li>
      <li class="coin">
        <span>
          ₪
        </span>
        <small>
          ILS
        </small>
      </li>
      <li>
        <font-awesome-icon class="icon" :icon="facebook" />
      </li>
      <li>
        <font-awesome-icon class="icon" :icon="twitter" />
      </li>
      <li>
        <font-awesome-icon class="icon" :icon="instagram" />
      </li>
    </ul>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      facebook: faFacebookF,
      twitter: faTwitter,
      instagram: faInstagram,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

// box-shadow: 0px 0px 0px 8px #fa3259, 0px 0px 0px 16px #e61e4d, 0px 0px 0px
24px // #e31c5f, 0px 0px 0px 31px #d70466, 0px 0px 0px 39px #bd1e59, 5px 5px
50px -8px // #bd1d59;
