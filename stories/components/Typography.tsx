import { Heading, Text } from '@space-travel-design-system/ui';
import React from 'react';
import { AccentText, Flex, Flow, Section } from './styled';

function Typography() {
  return (
    <Section style={{ '--flow-space': '4rem' } as any}>
      <h2>
        <span>02 </span>Typography
      </h2>

      <Flex>
        <Flow>
          <div>
            <AccentText as='p'>Heading 1 - Bellefair Regular - 128px</AccentText>
            <Heading as='h1' size='4xl' fonts='serif' isUpperCase>
              Earth
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Heading 2 - Bellefair Regular - 80px</AccentText>
            <Heading size='3xl' fonts='serif' isUpperCase>
              Venus
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Heading 3 - Bellefair Regular - 48px</AccentText>
            <Heading as='h3' fonts='serif' size='2xl' isUpperCase>
              Jupiter & Saturn
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Heading 4 - Bellefair Regular - 32px</AccentText>
            <Heading as='h4' fonts='serif' size='xl' isUpperCase>
              Uranus, Neptune, & Pluto
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Heading 5 - Barlow Condensed Regular - 20px - 4.75 Character Space</AccentText>
            <Heading
              as='h5'
              fonts='sans-cond'
              size='lg'
              spacing='1'
              isUpperCase
              style={{
                color: 'var(--st-light)',
              }}
            >
              So, you want to travel to space
            </Heading>
          </div>
        </Flow>

        <Flow>
          <div>
            <AccentText as='p'>Subheading 1 - Bellefair Regular - 20px</AccentText>
            <Heading as='h6' size='lg' fonts='serif' isUpperCase>
              384,400 km
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Subheading 2 - Barlow Condensed Regular - 12px - 2.35 Character Space</AccentText>
            <Heading as='h6' size='xs' fonts='sans-cond' spacing='3' isUpperCase>
              Avg. Distance
            </Heading>
          </div>
          <div>
            <AccentText as='p'>Nav Text - Barlow Condensed Regular - 14px - 2.7 Character Space</AccentText>
            <Text size='sm' fonts='sans-cond' spacing='2' isUpperCase>
              Europa
            </Text>
          </div>
          <div>
            <AccentText as='p'>Body Text</AccentText>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
              laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
              hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
            </Text>
          </div>
        </Flow>
      </Flex>
    </Section>
  );
}

export default Typography;
