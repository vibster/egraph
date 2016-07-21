/* eslint-env mocha */
const assert = require('power-assert')
const Graph = require('../../../graph')
const derivedGraph = require('../../../layouter/sugiyama-compound/derived-graph')

describe('derivedGraph(graph)', () => {
  it('', () => {
    const [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const graph = new Graph()
      .addVertex(a)
      .addVertex(b)
      .addVertex(c)
      .addVertex(d)
      .addVertex(e)
      .addVertex(f)
      .addVertex(g)
      .addVertex(h)
      .addVertex(i)
      .addVertex(j)
      .addVertex(k)
      .addVertex(l)
      .addVertex(m)
      .addVertex(n)
      .addEdge(b, c)
      .addEdge(d, e)
      .addEdge(g, b)
      .addEdge(h, m)
      .addEdge(i, n)
      .addEdge(j, l)
      .addEdge(k, l)
      .addEdge(m, i)
      .addEdge(m, n)
      .setChild(a, b)
      .setChild(a, c)
      .setChild(b, d)
      .setChild(b, e)
      .setChild(b, f)
      .setChild(e, j)
      .setChild(f, k)
      .setChild(f, l)
      .setChild(c, g)
      .setChild(c, h)
      .setChild(c, i)
      .setChild(g, m)
      .setChild(g, n)
    const derived = derivedGraph(graph)
    assert(derived.edge(b, c))
    assert(derived.edge(c, b))
    assert(derived.edge(d, e))
    assert(derived.edge(g, i))
    assert(derived.edge(h, g))
    assert(derived.edge(i, g))
    assert(derived.edge(j, l))
    assert(derived.edge(k, l))
    assert(derived.edge(m, n))
  })
})
