'use strict';

import expect from 'expect.js';
import graph from '../../src/graph';
import Layouter from '../../src/layout';

describe('layout(g, sizes, options)', () => {
  it('returns positions of vertices', () => {
    const g = graph();
    const a1 = g.addVertex({width: 1, height: 1});
    const a2 = g.addVertex({width: 1, height: 1});
    const a3 = g.addVertex({width: 1, height: 1});
    const b1 = g.addVertex({width: 1, height: 1});
    const b2 = g.addVertex({width: 1, height: 1});
    const b3 = g.addVertex({width: 1, height: 1});
    const c1 = g.addVertex({width: 1, height: 1});
    const c2 = g.addVertex({width: 1, height: 1});
    const c3 = g.addVertex({width: 1, height: 1});
    const d1 = g.addVertex({width: 1, height: 1});
    const d2 = g.addVertex({width: 1, height: 1});
    const d3 = g.addVertex({width: 1, height: 1});
    g.addEdge(a1, b2);
    g.addEdge(a2, b1);
    g.addEdge(a3, b1);
    g.addEdge(b1, c1);
    g.addEdge(b2, c1);
    g.addEdge(b2, c2);
    g.addEdge(b2, c3);
    g.addEdge(b3, c2);
    g.addEdge(c1, d3);
    g.addEdge(c2, d1);
    g.addEdge(c2, d2);
    const result = new Layouter().layout(g);
    expect(result).to.have.property('vertices');
    expect(result).to.have.property('edges');
  });
});
