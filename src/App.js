import { useState } from 'react';
import Table from './Table';

export default function App() {

  var id = 1;

  const [dataSource, setDataSource] = useState([]);

  const buildData = count => {
    var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    var data = [];
    if (dataSource.length !== 0) {
      id = dataSource[dataSource.length - 1].id + 1
    }

    for (var i = 0; i < count; i++) {
      data.push({ id: id, label: adjectives[random(adjectives.length)] + " " + colours[random(colours.length)] + " " + nouns[random(nouns.length)] });
      id++;
    }
    return data;
  }

  const random = max => {
    return Math.round(Math.random() * 1000) % max;
  }

  const create = num => {
    id = 1;
    setDataSource(buildData(num));
  }

  const add = () => {
    setDataSource(dataSource.concat(buildData(1000)))
  }

  const clear = () => {
    setDataSource([]);
  }


  return (
    <div className="header">
      <h2>React Benchmark</h2>
      <div className="btns">
        <button type="button" id="run" onClick={() => create(1000)}>Erstelle 1000 Zeilen</button>
        <button type="button" id="run" onClick={() => create(10000)}>Erstelle 10.000 Zeilen</button>
        <button type="button" id="run" onClick={() => add()}>Füge 1000 Zeilen hinzu</button>
        <button type="button" id="run" onClick={() => clear()}>Lösche alle Zeilen</button>
      </div>
      <Table dataSource={dataSource} />
    </div>
  )

}