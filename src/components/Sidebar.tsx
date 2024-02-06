import { SideNav } from "@maxio-com/react-ui-components";

const Sidebar = () => {
  return (
    <SideNav
      collapseBreakpoint={800}
      sections={[
        {
          href: "/setup",
          icon: "arrow-right",
          isCurrent: false,
          key: "setup-guide",
          name: "Setup Guide",
          options: null,
        },
        {
          href: "/dashboard",
          icon: "home",
          isCurrent: false,
          key: "dashboard",
          name: "Dashboard",
        },
        {
          icon: "credit-card",
          items: [
            {
              href: "/subscriptions",
              icon: null,
              isCurrent: true,
              key: "subscriptions",
              name: "Subscriptions",
              options: null,
            },
            {
              href: "/customers",
              icon: null,
              isCurrent: false,
              key: "customers",
              name: "Customers",
              options: null,
            },
            {
              href: "/transactions",
              icon: null,
              isCurrent: false,
              key: "transactions",
              name: "Transactions",
              options: null,
            },
          ],
          key: "billing",
          name: "Billing",
        },
        {
          icon: "list",
          items: [
            {
              href: "/products",
              icon: null,
              isCurrent: false,
              key: "products",
              name: "Products",
              options: null,
            },
            {
              href: "/offers",
              icon: null,
              isCurrent: false,
              key: "offers",
              name: "Offers",
              options: null,
            },
            {
              href: "/public_signup_pages",
              icon: null,
              isCurrent: false,
              key: "public-signup-pages",
              name: "Public Signup Pages",
              options: null,
            },
            {
              href: "/offer_signup_pages",
              icon: null,
              isCurrent: false,
              key: "offer-signup-pages",
              name: "Offer Signup Pages",
              options: null,
            },
          ],
          key: "catalog",
          name: "Catalog",
        },
        {
          icon: "bar-chart",
          items: [
            {
              href: "/analytics/mrr",
              icon: null,
              isCurrent: false,
              key: "mrr",
              name: "MRR",
              options: null,
            },
            {
              href: "/analytics/dunning",
              icon: null,
              isCurrent: false,
              key: "revenue-retention",
              name: "Revenue Retention",
              options: null,
            },
            {
              href: "/analytics/churn",
              icon: null,
              isCurrent: false,
              key: "churn-analytics",
              name: "Churn Analytics",
              options: null,
            },
            {
              href: "/analytics/paid_subscribers",
              icon: null,
              isCurrent: false,
              key: "paid-subscribers",
              name: "Paid Subscribers",
              options: null,
            },
            {
              href: "/analytics/free_subscribers",
              icon: null,
              isCurrent: false,
              key: "free-subscribers",
              name: "Free Subscribers",
              options: null,
            },
            {
              href: "/analytics/finance",
              icon: null,
              isCurrent: false,
              key: "finance-report",
              name: "Finance Report",
              options: null,
            },
            {
              href: "/analytics/revenue_recognition",
              icon: null,
              isCurrent: false,
              key: "revenue-recognition",
              name: "Revenue Recognition",
              options: null,
            },
          ],
          key: "insights",
          name: "Insights",
        },
        {
          icon: "briefcase",
          items: [
            {
              href: "/events",
              icon: null,
              isCurrent: false,
              key: "activity",
              name: "Activity",
              options: null,
            },
            {
              href: "/email_insights",
              icon: null,
              isCurrent: false,
              key: "email-insights",
              name: "Email Insights",
              options: null,
            },
            {
              href: "/webhooks",
              icon: null,
              isCurrent: false,
              key: "webhooks-panel",
              name: "Webhooks Panel",
              options: null,
            },
            {
              href: "/webhooks/testing",
              icon: null,
              isCurrent: false,
              key: "webhook-testing",
              name: "Webhook Testing",
              options: null,
            },
            {
              href: "/revenue_alerts/settings",
              icon: null,
              isCurrent: false,
              key: "revenue-alerts",
              name: "Revenue Alerts",
              options: null,
            },
          ],
          key: "tools",
          name: "Tools",
        },
        {
          icon: "cog",
          items: [
            {
              href: "/settings",
              icon: null,
              isCurrent: false,
              key: "settings",
              name: "Settings",
              options: null,
            },
            {
              href: "/gateway_settings",
              icon: null,
              isCurrent: false,
              key: "payment-gateways",
              name: "Payment Gateways",
              options: null,
            },
            {
              href: "/integrations/api_keys",
              icon: null,
              isCurrent: false,
              key: "integrations",
              name: "Integrations",
              options: null,
            },
            {
              href: "/setup/metafields",
              icon: null,
              isCurrent: false,
              key: "custom-fields",
              name: "Custom Fields",
              options: null,
            },
            {
              href: "/setup/referrals",
              icon: null,
              isCurrent: false,
              key: "referrals",
              name: "Referrals",
              options: null,
            },
            {
              href: "/taxes",
              icon: null,
              isCurrent: false,
              key: "taxes",
              name: "Taxes",
              options: null,
            },
            {
              href: "/dunning/settings",
              icon: null,
              isCurrent: false,
              key: "retries-dunning",
              name: "Retries & Dunning",
              options: null,
            },
          ],
          key: "config",
          name: "Config",
        },
      ]}
      shouldToggleSidebar
      topDropdownItems={{
        actions: [
          {
            icon: "globe",
            id: "11",
            title: "View all sites",
            url: "https://app.chargify.test/sellers/980769-acme-inc",
          },
          {
            icon: "plus-circle",
            id: "12",
            title: "Create another site",
            url: "https://app.chargify.test/sellers/980769-acme-inc/sites/new",
          },
          {
            icon: "copy-file",
            id: "13",
            rel: "facebox",
            title: "Clone current site",
            url: "/sites/3-acme-test/clone/new",
          },
          {
            icon: "pen",
            id: "14",
            title: "Edit current site",
            url: "https://app.chargify.test/sites/3-acme-test/edit",
          },
          {
            icon: "trash",
            id: "15",
            title: "Clear current site data",
            url: "/sites/clear_data",
          },
        ],
        mainItem: {
          icon: "circle-small-fill",
          id: "1",
          title: "My Site (USD)",
          url: "/",
        },
        otherItems: [
          {
            icon: "circle-small-fill",
            id: "2",
            title: "My Site (USD)",
            url: "https://acme.chargify.test/dashboard",
          },
          {
            icon: "circle-small-stroke",
            id: "3",
            title: "Authorizenet (USD)",
            url: "https://authorizenet.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "4",
            title: "Forte (USD)",
            url: "https://forte.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "5",
            title: "Payment Express (USD)",
            url: "https://payment-express.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "6",
            title: "Trust Commerce (USD)",
            url: "https://trust-commerce.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "7",
            title: "Braintree Blue (USD)",
            url: "https://braintree-blue.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "8",
            title: "Beanstream (USD)",
            url: "https://beanstream.chargify.test/setup",
          },
          {
            icon: "circle-small-stroke",
            id: "9",
            title: "Paypal (USD)",
            url: "https://paypal.chargify.test/setup",
          },
          {
            icon: "plus",
            id: "10",
            title: "11 sites...",
            url: "https://app.chargify.test/sellers/980769-acme-inc",
          },
        ],
      }}
      withIcons
    />
  );
};

export default Sidebar;