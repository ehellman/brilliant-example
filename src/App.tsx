import './App.css'
function App() {
  const iframeUrl = import.meta.env.VITE_BRILLIANT_URL;
  return (
    <div className='app-wrapper'>
      <DummyContent />

      <div>
        {iframeUrl ? `URL loaded into iframe: ${iframeUrl}` : 'No URL found, please set the VITE_BRILLIANT_URL env variable'}
      </div>
      <iframe
        src={iframeUrl}
        // src="https://brfu.se/k6gfd"
        allowFullScreen
      ></iframe>
      <DummyContent />
    </div>
  )
}

function DummyContent() {
  return (
    <div className='dummy-content'>
      <div>dummy</div>
      <div>dummy</div>
    </div>
  )
}
export default App
