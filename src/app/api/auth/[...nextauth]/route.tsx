import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // AzureADB2CProvider({
    //   tenantId: process.env.AZURE_AD_B2C_TENANT_NAME!,
    //   clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
    //   clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
    //   primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW!,
    //   authorization: {
    //     params: {
    //       scope: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${process.env.AZURE_AD_B2C_CLIENT_ID}/read offline_access openid`,
    //     },
    //   },
    //   checks: ["pkce"],
    //   client: { token_endpoint_auth_method: "none" },
    // }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
