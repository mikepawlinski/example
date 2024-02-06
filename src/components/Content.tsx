import {
  Body,
  Display,
  // ProgressBar,
  // Tab,
  // TabList,
  // TabPanel,
  // TabPanels,
  // Tabs,
  // Toggle,
} from "@maxio-com/react-ui-components";

const Content = () => {
  return (
    <>
      <Display>Hi!</Display>
      <Body>That's great you're here!</Body>
      {/* <br />
      <ProgressBar value={50} label="hey, you're doing good" />
      <br />

      <Toggle valueDescription="its enabled" valueDescriptionPosition="right" /> */}

      {/* <Tabs onChange={function noRefCheck() {}}>
        <TabList ariaLabel="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 5</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Body>Tab 1 Content</Body>
          </TabPanel>
          <TabPanel>
            <Body>Tab 2 Content</Body>
          </TabPanel>
          <TabPanel>
            <Body>Tab 3 Content</Body>
          </TabPanel>
          <TabPanel>
            <Body>Tab 4 Content</Body>
          </TabPanel>
          <TabPanel>
            <Body>Tab 5 Content</Body>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </>
  );
};

export default Content;
