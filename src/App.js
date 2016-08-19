import React, { Component } from 'react';
import './App.css';
import { AppleDownload } from './AppleDownload';
import { GoogleDownload } from './GoogleDownload';

class App extends Component {
  render() {
    const d = new Date();
    const copyrightYear = d.getFullYear();
    const styles = {
      App: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#F0AD45'
      },
      titleContainer: {
        marginBottom: '8em',
        textAlign: 'center'
      },
      title: {
        color: 'white',
        fontSize: '3em',
        fontWeight: '700',
      },
      subtitle: {
        color: 'white',
        fontSize: '1.5em'
      },
      titleContentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      appInfoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
      },
      phone: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
      },
      gif: {
        width: 'auto',
        maxHeight: '600px',
        display: 'flex',
        boxShadow: '0px 15px 30px 0px rgba(0,0,0,0.32)'
      },
      downloadLinks: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      appleDownloadContainer: {
        width: 135*1.6,
        height: 40*1.6,
        marginBottom: '3em'
      },
      googleDownloadContainer: {

      },
      footerContainer: {
        display: 'flex',
        backgroundColor: 'white',
        padding: '2em',
        flex: '0 auto',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
      },
      footerContent: {
      
      }
    }
    return (
      <div className="App" style={styles.App}>

        <div className="appInfoContainer" style={styles.appInfoContainer}>
          <div className="phone" style={styles.phone}>
            <img src="http://i.imgur.com/MtZyzkW.gif" style={styles.gif} alt="tc-demo"/>
          </div>
          <div className="downloadLinks" style={styles.downloadLinks}>
            <div className="titleContainer" style={styles.titleContainer}>
              <div className="title" style={styles.title}>Tinycrate</div>
              <div className="subtitle" style={styles.subtitle}>A world-wide loot collector</div>
            </div>
            <div className="appleDownloadContainer" style={styles.appleDownloadContainer}>
              <AppleDownload/>
            </div>
            <div className="googleDownloadContainer" style={styles.googleDownloadContainer}>
              <GoogleDownload/>
            </div>
          </div>
        </div>

        <div className="footerContainer" style={styles.footerContainer}>
          <div className="copyright" style={styles.footerContent}>Copyright © {copyrightYear} TinycrateHQ</div>
          <a href="#" className="toc" style={styles.footerContent}>Terms and Conditions</a>
        </div>

      </div>
    );
  }
}

export default App;
