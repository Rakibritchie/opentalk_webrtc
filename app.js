// replace these values with those generated in your TokBox Account
var apiKey = "47379961";
var sessionId = "1_MX40NzM3OTk2MX5-MTYzNzE0ODA5MDc3NH5tZkRjanowa0V4TXR3c3o2UHhEUDFBODB-fg";
var token = "T1==cGFydG5lcl9pZD00NzM3OTk2MSZzaWc9NGFjMjQzNDQ0MjBlMzU4ZDFlMDVlMzUzNTQ4YWUyMWY2NGM2Yzk3ODpzZXNzaW9uX2lkPTFfTVg0ME56TTNPVGsyTVg1LU1UWXpOekUwT0RBNU1EYzNOSDV0WmtSamFub3dhMFY0VFhSM2MzbzJVSGhFVURGQk9EQi1mZyZjcmVhdGVfdGltZT0xNjM3MTQ4MTI3Jm5vbmNlPTAuNTE3NjQ0NDE1NTA2NDAxMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjM5NzQwMTI2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";


// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
