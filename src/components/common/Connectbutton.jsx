import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "bf16131691c0932e2227bbd5a9119030",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("com.binance"),
];

const ConnectButtons = () => {
  return (<ConnectButtonPage />);
}

function ConnectButtonPage() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          accentText: "hsl(216, 78%, 45%)",
          modalBg: "hsl(230, 43%, 10%)",
          borderColor: "hsl(187, 84%, 10%)",
          separatorLine: "hsl(228, 12%, 17%)",
        },
      })}
      connectModal={{ size: "compact" }}
      auth={{
        async doLogin(params) {
          // call your backend to verify the signed payload passed in params
        },
        async doLogout() {
          // call your backend to logout the user if needed
        },
        async getLoginPayload(params) {
          // call your backend and return the payload
        },
        async isLoggedIn() {
          // call your backend to check if the user is logged in
        },
      }}
    />
  );
}
export default ConnectButtons;