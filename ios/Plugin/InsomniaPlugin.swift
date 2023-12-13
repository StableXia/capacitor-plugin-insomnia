import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(InsomniaPlugin)
public class InsomniaPlugin: CAPPlugin {
    @objc func keepAwake(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = true
            call.resolve()
        }
    }
    
    @objc func allowSleepAgain(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = false
            call.resolve()
        }
    }
}
