export default function Table() {
  let tableData = [];

  for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 10; j++) {
      tableData.push(`${i} x ${j} = ${i * j}`); // Store each multiplication string
      console.log(tableData)
    }
  }

  return (
    <div>
      {tableData.map((row, index) => (<p key={index}>{row}</p>))}
    </div>
  );
}

