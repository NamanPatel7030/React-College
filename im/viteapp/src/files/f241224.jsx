import * as React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Time Table</h1>
        <div>
          <table border={2} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Day | Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00 to 8:55</td>
                <td>React (NV)</td>
                <td>React (NV)</td>
                <td>AI/ML (CP)</td>
                <td>React (SMS)</td>
                <td>PD (DS)/DM (Lib)/EC (Lib)</td>
              </tr>
              <tr>
                <td>8:55 to 9:45</td>
                <td>React (NV)</td>
                <td>React (NV)</td>
                <td>AI/ML (CP)</td>
                <td>React (SMS)</td>
                <td>PD (DS)/DM (Lib)/EC (Lib)</td>
              </tr>
              <tr>
                <td>Class / Lab location</td>
                <td>LL1</td>
                <td>LL5</td>
                <td>LL1</td>
                <td>LL1</td>
                <td>118</td>
              </tr>
              <tr>
                <td>9:45 to 10:00</td>
                <td colSpan={5} align="center">TEA BREAK</td>
              </tr>
              <tr>
                <td>10:00 to 10:50</td>
                <td>.NET (P7)/ADV. JAVA (NC)</td>
                <td>.NET (BD)/ADV. JAVA (NC)</td>
                <td>TOC (AKK)</td>
                <td>AI/ML (CP)</td>
                <td>Ai/M;;CP;</td>
              </tr>
              <tr>
                <td>10:50 to 11:40</td>
                <td>.NET (P7)/ADV. JAVA (NC)</td>
                <td>.NET (BD)/ADV. JAVA (NC)</td>
                <td>TOC (AKK)</td>
                <td>AI/ML (CP)</td>
                <td>TOC (AKK)</td>
              </tr>
              <tr>
                <td>Class / Lab location</td>
                <td>LL1 / LL5</td>
                <td>LL1 / LL5</td>
                <td>201</td>
                <td>LL6</td>
                <td>LL7</td>
              </tr>
              <tr>
                <td>11:40 to 12:30</td>
                <td colSpan={5} align="center">LUNCH BREAK</td>
              </tr>
              <tr>
                <td>12:30 to 1:20</td>
                <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                <td>PD (DS)/DM (Lib)/EC (Lib)</td>
                <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                <td>.NET (BD)/ADV. JAVA (Lib)</td>
                <td>ADV. JAVA (MV)/.NET (Lib)</td>
              </tr>
              <tr>
                <td>1:20 to 2:10</td>
                <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                <td>PD (DS)/DM (Lib)/EC (Lib)</td>
                <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                <td>.NET (BD)/ADV. JAVA (Lib)</td>
                <td>ADV. JAVA (MV)/.NET (Lib)</td>
              </tr>
              <tr>
                <td>Class / Lab location</td>
                <td>214 / Elec. Machine Lab</td>
                <td>118</td>
                <td>214 / Elec. Machine Lab</td>
                <td>LL3</td>
                <td>LL5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
