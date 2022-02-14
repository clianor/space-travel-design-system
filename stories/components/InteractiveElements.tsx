import { Anchor, Text } from '@space-travel-design-system/ui';
import React from 'react';
import { Flex, Flow, Section } from './styled';

function InteractiveElements() {
  return (
    <Section>
      <h2>
        <span>03 </span>Interactive Elements
      </h2>

      {/* navigation */}

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
          <div></div>
        </Flow>
      </Flex>
    </Section>
  );
}

export default InteractiveElements;
