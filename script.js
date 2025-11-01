(function() {
// Prevent duplicate iframes
if (document.getElementById('drivemad-frame')) return;

// Create iframe
const iframe = document.createElement('iframe');
iframe.id = 'drivemad-frame';
iframe.src = '[https://u3d.degames.org/35](https://u3d.degames.org/35)';

// Style iframe as fullscreen overlay
Object.assign(iframe.style, {
position: 'fixed',
top: '0',
left: '0',
width: '100%',
height: '100%',
border: 'none',
margin: '0',
padding: '0',
zIndex: '999999',
background: '#000'
});

// Add a simple click-to-close button
const closeBtn = document.createElement('button');
closeBtn.textContent = '✖ Close Drive Mad';
Object.assign(closeBtn.style, {
position: 'fixed',
top: '10px',
right: '10px',
zIndex: '1000000',
padding: '6px 12px',
fontSize: '16px',
background: '#c0392b',
color: '#fff',
border: 'none',
borderRadius: '6px',
cursor: 'pointer'
});
closeBtn.addEventListener('click', () => {
iframe.remove();
closeBtn.remove();
});

// Append to body
document.body.appendChild(iframe);
document.body.appendChild(closeBtn);
})();
