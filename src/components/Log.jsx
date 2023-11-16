export default function Log({ turns }) {
    return (
      <>
        <h3 id='logHeading'>Game Log </h3>
        <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
          ))}
        </ol>
      </>
    );
  }