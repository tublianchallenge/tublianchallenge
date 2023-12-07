
<script>
  export let tickImage = "./img/tick-circle.svg";
  export let starImage = "./img/star-66.svg";

  const frameStyle = {
    position: "relative",
    width: "580px",
    height: "491px",
    backgroundColor: "var(--base50-dark)",
    borderRadius: "20px",
    overflow: "hidden",
    borderColor: "var(--base100-dark)",
  };

  const overlapStyle = {
    position: "absolute",
    width: "580px",
    height: "314px",
    top: "0",
    left: "0",
  };

  const logoWrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "385px",
    position: "absolute",
    top: "20px",
    left: "20px",
  };

  const logoStyle = {
    position: "relative",
    width: "123px",
    height: "25.08px",
  };

  const groupWrapperStyle = {
    position: "absolute",
    width: "580px",
    height: "314px",
    top: "0",
    left: "0",
    backgroundImage: "url(./img/frame-658.svg)",
    backgroundSize: "100% 100%",
  };

  const groupStyle = {
    position: "relative",
    width: "177px",
    height: "177px",
    top: "68px",
    left: "202px",
  };

  const overlapGroupStyle = {
    position: "relative",
    width: "159px",
    height: "159px",
    top: "9px",
    left: "9px",
    backgroundImage: `url(${starImage})`,
    backgroundSize: "100% 100%",
  };

  const tickStyle = {
    position: "absolute",
    width: "95px",
    height: "95px",
    top: "32px",
    left: "32px",
  };

  const textWrapperStyle = {
    position: "absolute",
    width: "540px",
    top: "325px",
    left: "20px",
    fontFamily: "var(--text-3xl-font-bold-font-family)",
    fontWeight: "var(--text-3xl-font-bold-font-weight)",
    color: "var(--base800-dark)",
    fontSize: "var(--text-3xl-font-bold-font-size)",
    textAlign: "center",
    letterSpacing: "var(--text-3xl-font-bold-letter-spacing)",
    lineHeight: "var(--text-3xl-font-bold-line-height)",
    fontStyle: "var(--text-3xl-font-bold-font-style)",
  };

  const paragraphStyle = {
    position: "absolute",
    width: "540px",
    top: "378px",
    left: "20px",
    fontFamily: "var(--text-base-font-medium-font-family)",
    fontWeight: "var(--text-base-font-medium-font-weight)",
    color: "var(--base800-dark)",
    fontSize: "var(--text-base-font-medium-font-size)",
    textAlign: "center",
    letterSpacing: "var(--text-base-font-medium-letter-spacing)",
    lineHeight: "var(--text-base-font-medium-line-height)",
    fontStyle: "var(--text-base-font-medium-font-style)",
  };

  const buttonWrapperStyle = {
    display: "flex",
    width: "540px",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "8px 16px",
    position: "absolute",
    top: "431px",
    left: "20px",
    backgroundColor: "var(--primarygold-300)",
    borderRadius: "30px",
    all: "unset",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    position: "relative",
    width: "fit-content",
    marginTop: "-1px",
    fontFamily: "var(--text-base-font-medium-font-family)",
    fontWeight: "var(--text-base-font-medium-font-weight)",
    color: "var(--base900-light)",
    fontSize: "var(--text-base-font-medium-font-size)",
    letterSpacing: "var(--text-base-font-medium-letter-spacing)",
    lineHeight: "var(--text-base-font-medium-line-height)",
    whiteSpace: "nowrap",
    fontStyle: "var(--text-base-font-medium-font-style)",
    all: "unset",
    boxSizing: "border-box",
  };
</script>

<style>
  .frame {
    {@html frameStyle}
  }

  .frame .overlap {
    {@html overlapStyle}
  }

  .frame .div {
    {@html logoWrapperStyle}
  }

  .frame .logo {
    {@html logoStyle}
  }

  .frame .group-wrapper {
    {@html groupWrapperStyle}
  }

  .frame .group {
    {@html groupStyle}
  }

  .frame .overlap-group {
    {@html overlapGroupStyle}
  }

  .frame .vuesax-bold-tick {
    {@html tickStyle}
  }

  .frame .text-wrapper {
    {@html textWrapperStyle}
  }

  .frame .p {
    {@html paragraphStyle}
  }

  .frame .button  {
    {@html buttonWrapperStyle}
  }

  .frame .button-2 {
    {@html buttonStyle}
  }
</style>

<div class="frame">
  <div class="overlap">
    <div class="div"><img class="logo" src="img/logo.png" /></div>
    <div class="group-wrapper">
      <div class="group">
        <div class="overlap-group"><img class="vuesax-bold-tick" src={tickImage} /></div>

      </div>
    </div>
  </div>
  <div class="text-wrapper">Payment Successful</div>
  <p class="p">Your payment went through successfully.</p>
  <button class="button"><button class="button-2">Proceed</button></button>
</div>