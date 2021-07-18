<template>
  <footer>
    <ul class="left">
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

    <ul class="right">
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
          $
        </span>
        <small>
          USD
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
