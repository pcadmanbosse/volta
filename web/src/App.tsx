import TimezoneClock from './components/TimezoneClock';
import ClockContextProvider from './contexts/ClockContext';
import TimezoneContextProvider from './contexts/TimezoneContext';

function App() {
  return (
        <TimezoneContextProvider>
        <ClockContextProvider >
          <TimezoneClock />
        </ClockContextProvider>
        </TimezoneContextProvider>
  );
}

export default App;
