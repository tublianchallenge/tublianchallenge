<!-- src/routes/Signup.svelte -->
<script>
  import CreateAccountButton from '$components/CreateAccountButton.svelte';
  import Divider from '$components/Divider.svelte';
  import FooterLinks from '$components/FooterLinks.svelte';
  import Input from '$components/Input.svelte';
  import LoginLink from '$components/LoginLink.svelte';
  import PasswordStrengthIndicators from '$components/PasswordStrengthIndicators.svelte';

  export let images = {
    main: "https://cdn.builder.io/api/v1/image/assets/TEMP/690365f7-ce1b-4fbe-93e2-112245ade8fd?apiKey=1e8cd32825fa495abd6eed872c3cbf13&",
    sub1: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad30ee-9327-40cb-bbaf-dace4195b338?apiKey=1e8cd32825fa495abd6eed872c3cbf13&"
  };
</script>

<!-- created components -->
<Input label="Email" type="email" />
<Input label="Password" type="password" />
<PasswordStrengthIndicators />
<CreateAccountButton label="Create Account" href="#" />
<Divider />
<LoginLink text="Already have an account?" href="#" />
<FooterLinks privacyPolicyHref="#" termsHref="#" />
