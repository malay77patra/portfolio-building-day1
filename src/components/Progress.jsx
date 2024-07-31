export default function Progress() {
    return (
        <div>
            <div className='progress-item' style={{marginTop: '50px'}}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334" fill="url(#a)" /><path fillRule="evenodd" clipRule="evenodd" d="M18.983 30c2.197 0 3.979-1.724 3.979-3.852v-2.666h-6.886v-.741h9.946c2.197 0 3.978-1.725 3.978-3.852V13.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.782 3.851-3.979 3.851h-7.344c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852zm.918-4.74c-.76 0-1.377.596-1.377 1.333 0 .736.617 1.333 1.377 1.333.761 0 1.378-.597 1.378-1.333 0-.737-.617-1.334-1.378-1.334" fill="url(#b)" /><defs><linearGradient id="a" x1="12.481" y1="2" x2="12.481" y2="22.741" gradientUnits="userSpaceOnUse"><stop stopColor="#327EBD" /><stop offset="1" stopColor="#1565A7" /></linearGradient><linearGradient id="b" x1="19.519" y1="9.259" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#FFDA4B" /><stop offset="1" stopColor="#F9C600" /></linearGradient></defs></svg>
                <div className='progress-bar' style={{ border: '1px solid #F9C600' }}>
                    <div style={{ width: '95%', backgroundColor: '#F9C600' }}></div>
                    <span className="name">python</span>
                </div>
            </div>
            <div className='progress-item'>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#13aa52" /><path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53" fill="#fff" /></svg>
                <div className='progress-bar' style={{ border: '1px solid #13aa52' }}>
                    <div style={{ width: '75%', backgroundColor: '#13aa52' }}></div>
                    <span className="name">mongodb</span>
                </div>
            </div>
            <div className='progress-item'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" baseProfile="basic"><path fill="#b0c1d4" d="M74.01 62.5a5.84 5.84 0 0 1-4.607-2.277L57.807 45.06 46.211 60.223a5.83 5.83 0 0 1-4.607 2.277h-3.428L54.66 40.944 38.261 19.5h3.428c1.795 0 3.518.851 4.607 2.276l11.51 15.052 11.51-15.052a5.83 5.83 0 0 1 4.607-2.276h3.428L60.954 40.944 77.438 62.5z" /><path fill="#66798f" d="M76.341 20 60.324 40.944 76.426 62H74.01a5.3 5.3 0 0 1-4.21-2.081L57.807 44.237 45.814 59.919A5.3 5.3 0 0 1 41.604 62h-2.417l16.102-21.056L39.273 20h2.417c1.651 0 3.207.769 4.21 2.081l11.907 15.571 11.907-15.571A5.3 5.3 0 0 1 73.924 20zm2.023-1h-4.441c-1.949 0-3.82.925-5.005 2.473L57.807 36.005 46.694 21.473A6.34 6.34 0 0 0 41.689 19h-4.441l1.229 1.607L54.03 40.944 38.393 61.393 37.163 63h4.441c1.949 0 3.82-.925 5.005-2.473l11.198-14.644 11.198 14.644A6.34 6.34 0 0 0 74.01 63h4.441l-1.229-1.607-15.639-20.449 15.552-20.337z" /><path fill="#b0c1d4" d="M20 64.5c-10.201 0-18.5-8.594-18.5-19.156v-8.689C1.5 26.093 9.799 17.5 20 17.5s18.5 8.593 18.5 19.154v7.845l-32 .001v.844C6.5 53.15 12.556 59.5 20 59.5c4.111 0 8.093-2.067 10.653-5.529 1.161-1.571 2.86-2.472 4.661-2.472h1.711l.204.204.134.268-.075.203C34.571 59.547 27.624 64.5 20 64.5m13.5-25v-2.846C33.5 28.85 27.444 22.5 20 22.5S6.5 28.85 6.5 36.655V39.5z" /><path fill="#66798f" d="M20 18c9.925 0 18 8.369 18 18.654v7.345L6 44v1.344C6 53.426 12.28 60 20 60c4.376 0 8.446-2.203 11.055-5.732 1.016-1.374 2.55-2.269 4.259-2.269h1.505v.002C34.175 59.176 27.411 64 20 64c-9.925 0-18-8.369-18-18.656v-8.689C2 26.369 10.075 18 20 18M6 40h28v-3.346C34 28.574 27.72 22 20 22S6 28.574 6 36.654zm14-23C9.523 17 1 25.817 1 36.654v8.689C1 56.182 9.523 65 20 65c7.832 0 14.968-5.085 17.758-12.653l.496-1.346-1.435-.002h-1.505c-1.961 0-3.806.975-5.063 2.675C27.785 57.009 23.953 59 20 59c-7.168 0-13-6.126-13-13.656V45l31-.001h1v-8.345C39 25.817 30.477 17 20 17M7 39v-2.346C7 29.125 12.832 23 20 23s13 6.125 13 13.654V39z" /></svg>
                <div className='progress-bar' style={{ border: '1px solid #b0c1d4' }}>
                    <div style={{ width: '75%', backgroundColor: '#b0c1d4' }}></div>
                    <span className="name">express js</span>
                </div>
            </div>

            <div className='progress-item'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.679 15.976c0-1.435-1.2-2.597-2.679-2.597-1.48 0-2.679 1.162-2.679 2.597 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597" fill="#53C1DE" /><path fillRule="evenodd" clipRule="evenodd" d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822m-.284 8.513a29 29 0 0 0-1.519-3.685 29 29 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691m-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29 29 0 0 0 2.514-3.096 31 31 0 0 0 4.064-.607c.407 1.595 1.194 5.298-.676 6.348m-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278a31 31 0 0 0 4.042.568 31 31 0 0 0 2.576 3.085c-1.083 1.015-4.163 3.671-6.034 2.625M2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29 29 0 0 0 1.462 3.673 30 30 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756M9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a30 30 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326m11.275 7.073c.957.117 1.875.273 2.736.464a26 26 0 0 1-.96 2.504 41 41 0 0 0-1.776-2.968m-4.365-3.529a27 27 0 0 1 1.766 2.066 39 39 0 0 0-3.546 0 28 28 0 0 1 1.78-2.066m-6.157 6.496a27 27 0 0 1-.954-2.517 30 30 0 0 1 2.72-.452 36 36 0 0 0-1.766 2.97m1.793 5.922a28 28 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36 36 0 0 0 1.792 2.999m4.4 3.525a28 28 0 0 1-1.805-2.094q1.783.069 3.566-.006a27 27 0 0 1-1.761 2.1m6.117-6.569c.4.886.739 1.744 1.007 2.559a28 28 0 0 1-2.798.462 41 41 0 0 0 1.79-3.02m-3.42 3.172a41.5 41.5 0 0 1-5.463.01 35 35 0 0 1-2.746-4.598 35 35 0 0 1 2.73-4.59 37.4 37.4 0 0 1 5.469 0 39 39 0 0 1 2.739 4.572 39 39 0 0 1-2.729 4.606M22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a32 32 0 0 0-4.012-.615 29 29 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692" fill="#53C1DE" /></svg>
                <div className='progress-bar' style={{ border: '1px solid #53C1DE' }}>
                    <div style={{ width: '75%', backgroundColor: '#53C1DE' }}></div>
                    <span className="name">react js</span>
                </div>
            </div>
            <div className='progress-item'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30" fill="#83cd29" /><path d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784" fill="#83cd29" /></svg>
                <div className='progress-bar' style={{ border: '1px solid #83cd29' }}>
                    <div style={{ width: '80%', backgroundColor: '#83cd29' }}></div>
                    <span className="name">node js</span>
                </div>
            </div>
            <div className='progress-item'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.472 14.753 17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539 3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551" fill="#dd4c35" /><path d="m12.158 5.067 3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172" fill="#fff" /></svg>
                <div className='progress-bar' style={{ border: '1px solid #dd4c35' }}>
                    <div style={{ width: '95%', backgroundColor: '#dd4c35' }}></div>
                    <span className="name">git & github</span>
                </div>
            </div>
        </div>
    )
}