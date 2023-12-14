
<script>
  export let tickImage = "./img/tick-circle.svg";
  export let starImage = "./img/star-66.svg";
  
<style>
  .frame {
  position: relative;
  width: 580px;
  height: 491px;
  background-color: var(--base50-dark);
  border-radius: 20px;
  overflow: hidden;
  border-color: var(--base100-dark);
}

.frame .overlap {
  position: absolute;
  width: 580px;
  height: 314px;
  top: 0;
  left: 0;
}

.frame .div {
  display: inline-flex;
  align-items: center;
  gap: 385px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.frame .logo {
  position: relative;
  width: 123px;
  height: 25.08px;
}

.frame .group-wrapper {
  position: absolute;
  width: 580px;
  height: 314px;
  top: 0;
  left: 0;
  background-image: url(./img/frame-658.svg);
  background-size: 100% 100%;
}

.frame .group {
  position: relative;
  width: 177px;
  height: 177px;
  top: 68px;
  left: 202px;
}

.frame .overlap-group {
  position: relative;
  width: 159px;
  height: 159px;
  top: 9px;
  left: 9px;
  background-image: url(./img/star-66.svg);
  background-size: 100% 100%;
}

.frame .vuesax-bold-tick {
  position: absolute;
  width: 95px;
  height: 95px;
  top: 32px;
  left: 32px;
}

.frame .text-wrapper {
  position: absolute;
  width: 540px;
  top: 325px;
  left: 20px;
  font-family: var(--text-3xl-font-bold-font-family);
  font-weight: var(--text-3xl-font-bold-font-weight);
  color: var(--base800-dark);
  font-size: var(--text-3xl-font-bold-font-size);
  text-align: center;
  letter-spacing: var(--text-3xl-font-bold-letter-spacing);
  line-height: var(--text-3xl-font-bold-line-height);
  font-style: var(--text-3xl-font-bold-font-style);
}

.frame .p {
  position: absolute;
  width: 540px;
  top: 378px;
  left: 20px;
  font-family: var(--text-base-font-medium-font-family);
  font-weight: var(--text-base-font-medium-font-weight);
  color: var(--base800-dark);
  font-size: var(--text-base-font-medium-font-size);
  text-align: center;
  letter-spacing: var(--text-base-font-medium-letter-spacing);
  line-height: var(--text-base-font-medium-line-height);
  font-style: var(--text-base-font-medium-font-style);
}

.frame .button {
  display: flex;
  width: 540px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: absolute;
  top: 431px;
  left: 20px;
  background-color: var(--primarygold-300);
  border-radius: 30px;
  all: unset;
  box-sizing: border-box;
}

.frame .button-2 {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--text-base-font-medium-font-family);
  font-weight: var(--text-base-font-medium-font-weight);
  color: var(--base900-light);
  font-size: var(--text-base-font-medium-font-size);
  letter-spacing: var(--text-base-font-medium-letter-spacing);
  line-height: var(--text-base-font-medium-line-height);
  white-space: nowrap;
  font-style: var(--text-base-font-medium-font-style);
  all: unset;
  box-sizing: border-box;
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