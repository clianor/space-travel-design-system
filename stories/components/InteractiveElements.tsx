import { Anchor, Tab, Tabs, Text } from '@space-travel-design-system/ui';
import React from 'react';
import { Flex, Flow, Section } from './styled';

function InteractiveElements() {
  return (
    <Section>
      <h2>
        <span>03 </span>Interactive Elements
      </h2>

      {/* navigation */}
      <Tabs
        gap='clamp(1.5rem, 5vw, 3.5rem)'
        size='lg'
        style={{ margin: '2rem 0', '--st-light': 'var(--st-white)' } as any}
      >
        <Tab active href='#'>
          <span>01</span>Active
        </Tab>
        <Tab href='#'>
          <span>02</span>Hover
        </Tab>
        <Tab href='#'>
          <span>03</span>Idle
        </Tab>
      </Tabs>

      <Flex>
        <Flow>
          {/* explore anchor */}
          <Anchor style={{ marginTop: '5rem' }}>
            <Text fonts='serif' size='xl' isUpperCase>
              Explore
            </Text>
          </Anchor>
        </Flow>

        <Flow>
          {/* Tabs */}
          <Tabs>
            <Tab active href='#'>
              Moon
            </Tab>
            <Tab>Mars</Tab>
            <Tab>Europa</Tab>
          </Tabs>

          {/* Dots */}

          {/* Numbers */}
        </Flow>
      </Flex>
    </Section>
  );
}

export default InteractiveElements;
