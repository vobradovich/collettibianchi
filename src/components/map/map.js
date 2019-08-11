import React from 'react';
import IO from 'components/io';
import { Container } from './map.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible, hasBeenVisible }) => (
      <Container isVisible={isVisible} hasBeenVisible={hasBeenVisible}>
        <iframe frameBorder="0" title="Map"
          src="https://www.google.com/maps/embed/v1/search?q=Via%20XI%20Maggio%2C%20122%2C%20Marsala%2C%20TP%2C%20Italy&amp;key=AIzaSyAElYRxH8W4PtLQrjEkyrGwRKhQhxdZzj8" allowFullScreen>
        </iframe>
      </Container>
    )}
  </IO>
);

export default IOExample;
