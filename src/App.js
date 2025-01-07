import './App.css';
// import Duration from './components/duration';
// import timings from '../src/data/timings.json';
// import days from '../src/data/days.json';

function App() {
  return (
  <div>
       <table border="1" style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Day / Time</th>
          <th>08:30-09:25</th>
          <th>09:30-10:25</th>
          <th>10:30-11:25</th>
          <th>11:30-12:25</th>
          <th>12:30-13:25</th>
          <th>13:30-14:25</th>
          <th>14:30-15:25</th>
          <th>15:30-16:25</th>
          <th>16:30-17:25</th>
          <th>17:30-18:25</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td style={{backgroundColor:"#FFFF00"}}>A</td>
          <td style={{backgroundColor:"#C4EED0"}}>
            <a href='https://drive.google.com/drive/folders/1dwEZWR23KQLMfd1V3PXLYkrFxhbXrwb2' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              C(Thapsya Ma'am - Maitreyi)
            </a>
          </td>
          <td style={{backgroundColor:"#FEF7E0"}}>
            <a href='https://drive.google.com/drive/folders/1nHm0EsTnWkrSAcMfiyldJw_0yyiGdDH-' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              D(Bodhi Sir - L-12)
            </a>
          </td>
          <td style={{backgroundColor:"#F7B4AE"}}>
            <a href='https://drive.google.com/drive/folders/1NEftjqp_TMtrmzU7L4rUQrvL1H7RrI-n' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              F(Surya Sir - Sandipani)
            </a>
          </td>
          <td>Lunch</td>
          <td style={{backgroundColor:"#6BA5ED"}}>
            <a href='https://drive.google.com/drive/folders/1MBBLwWFM1fRYOfhVHT_BuBHO6zKtkk56' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              G(Kapil Sir - Gargi)
            </a>
          </td>
          <td>M1</td>
          <td>M2</td>
          <td>M3</td>
          <td>M4</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td style={{backgroundColor:"#FFFF00"}}>A</td>
          <td style={{backgroundColor:"#FFFF00"}}>A</td>
          <td style={{backgroundColor:"#FBBC04"}}>
            <a href='https://drive.google.com/drive/folders/1M4PG0Hoy3n8l6WrHE1zVQhENhTkZSwTr' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              B(Ananya Ma'am - L-33)
            </a>
          </td>
          <td style={{backgroundColor:"#C4EED0"}}>
            <a href='https://drive.google.com/drive/folders/1dwEZWR23KQLMfd1V3PXLYkrFxhbXrwb2' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              C(Thapsya Ma'am - Maitreyi)
            </a>
          </td>
          <td>Lunch</td>
          <td style={{backgroundColor:"#6BA5ED"}}>
            <a href='https://drive.google.com/drive/folders/1MBBLwWFM1fRYOfhVHT_BuBHO6zKtkk56' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              G(Kapil Sir - Gargi)
            </a>
          </td>
          <td>N1</td>
          <td>N2</td>
          <td>N3</td>
          <td>N4</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td style={{backgroundColor:"#34A853"}}>E</td>
          <td style={{backgroundColor:"#C4EED0"}}>
            <a href='https://drive.google.com/drive/folders/1dwEZWR23KQLMfd1V3PXLYkrFxhbXrwb2' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              C(Thapsya Ma'am - Maitreyi)
            </a>
          </td>
          <td style={{backgroundColor:"#FBBC04"}}>
            <a href='https://drive.google.com/drive/folders/1M4PG0Hoy3n8l6WrHE1zVQhENhTkZSwTr' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              B(Ananya Ma'am - L-33)
            </a>
          </td>
          <td style={{backgroundColor:"#FFFF00"}}>A</td>
          <td>Lunch</td>
          <td style={{backgroundColor:"#1A73E8"}}>
            <a href='https://drive.google.com/drive/folders/10UGLRzaL2GOAmuW5PtlKQBNBb3BDnIha' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              H(Abhishek Sir - Kalidas)
            </a>
          </td>
          <td style={{backgroundColor:"#6BA5ED"}}>
            <a href='https://drive.google.com/drive/folders/1MBBLwWFM1fRYOfhVHT_BuBHO6zKtkk56' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              G(Kapil Sir - Gargi)
            </a>
          </td>
          <td style={{backgroundColor:"#F7B4AE"}}>
            <a href='https://drive.google.com/drive/folders/1NEftjqp_TMtrmzU7L4rUQrvL1H7RrI-n' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              F(Surya Sir - Sandipani)
            </a>
          </td>
          <td>I</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td style={{backgroundColor:"#C4EED0"}}>
            <a href='https://drive.google.com/drive/folders/1dwEZWR23KQLMfd1V3PXLYkrFxhbXrwb2' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              C(Thapsya Ma'am - Maitreyi)
            </a>
          </td>
          <td style={{backgroundColor:"#FEF7E0"}}>
            <a href='https://drive.google.com/drive/folders/1nHm0EsTnWkrSAcMfiyldJw_0yyiGdDH-' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              D(Bodhi Sir - L-12)
            </a>
          </td>
          <td style={{backgroundColor:"#34A853"}}>E</td>
          <td style={{backgroundColor:"#F7B4AE"}}>
            <a href='https://drive.google.com/drive/folders/1NEftjqp_TMtrmzU7L4rUQrvL1H7RrI-n' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              F(Surya Sir - Sandipani)
            </a>
          </td>
          <td>Lunch</td>
          <td style={{backgroundColor:"#1A73E8"}}>
            <a href='https://drive.google.com/drive/folders/10UGLRzaL2GOAmuW5PtlKQBNBb3BDnIha' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              H(Abhishek Sir - Kalidas)
            </a>
          </td>
          <td>O1</td>
          <td>O2</td>
          <td style={{backgroundColor:"#6BA5ED"}}>
            <a href='https://drive.google.com/drive/folders/1MBBLwWFM1fRYOfhVHT_BuBHO6zKtkk56' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              O3(Kapil Sir - Gargi)
            </a>
          </td>
          <td style={{backgroundColor:"#6BA5ED"}}>
            <a href='https://drive.google.com/drive/folders/1MBBLwWFM1fRYOfhVHT_BuBHO6zKtkk56' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              O4(Kapil Sir - Gargi)
            </a>
          </td>
        </tr>
        <tr>
          <td>Friday</td>
          <td style={{backgroundColor:"#FBBC04"}}>
            <a href='https://drive.google.com/drive/folders/1M4PG0Hoy3n8l6WrHE1zVQhENhTkZSwTr' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              B(Ananya Ma'am - L-33)
            </a>
          </td>
          <td style={{backgroundColor:"#FBBC04"}}>
            <a href='https://drive.google.com/drive/folders/1M4PG0Hoy3n8l6WrHE1zVQhENhTkZSwTr' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              B(Ananya Ma'am - L-33)
            </a>
          </td>
          <td style={{backgroundColor:"#FEF7E0"}}>
            <a href='https://drive.google.com/drive/folders/1nHm0EsTnWkrSAcMfiyldJw_0yyiGdDH-' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              D(Bodhi Sir - L-12)
            </a>
          </td>
          <td style={{backgroundColor:"#34A853"}}>E</td>
          <td>Lunch</td>
          <td style={{backgroundColor:"#1A73E8"}}>
            <a href='https://drive.google.com/drive/folders/10UGLRzaL2GOAmuW5PtlKQBNBb3BDnIha' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
              H(Abhishek Sir - Kalidas)
            </a>
          </td>
          <td>P1</td>
          <td>P2</td>
          <td>P3</td>
          <td>P4</td>
        </tr>
      </tbody>
    </table>
    
    {/* <div style={{justifyContent:'center'}}>
      <div style={{display: 'flex', justifyContent:'center', width:'100%'}}>
        {timings.map((timing, index) => (
        <div key={index} style={{border:'1px solid black',padding:'5px 10px'}}>
          <Duration duration={timing.duration} />
        </div>
      ))}
      </div>

      <div style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>
        {days.map((day, index) => (
        <div key={index} style={{border:'1px solid black',padding: '5px 10px',marginLeft:'292px',width:'fit-content'}}>
          {day.name}
        </div>
      ))}
      </div>

      

    </div> */}



  </div>
    

  );
}

export default App;
