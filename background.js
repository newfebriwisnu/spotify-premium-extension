chrome.runtime.onInstalled.addListener(() => {
  const rules = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect:
          "https://raw.githubusercontent.com/texnikru/blank-mp3s/master/1sec.mp3",
      },
      condition: {
        urlFilter: [
          "*://*.audio-akp-quic-spotify-com.akamaized.net/*",
          "*://*.audio-fa.scdn.co/*",
          "*://creativeservice-production.scdn.co/*",
        ],
        resourceTypes: ["main_frame"],
        responseHeaders: [{ name: "Content-Type", valueContains: "audio/mp3" }],
      },
    },
  ];
});
