/**
 * Content Protection Script
 * Disables text selection, right-click, keyboard shortcuts, drag, and dev tools
 */
(function() {
    'use strict';

    // Disable text selection via CSS
    document.documentElement.style.cssText += `
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
    `;

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable drag
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable copy
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable cut
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + C (Copy)
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + X (Cut)
        if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + U (View Source)
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + S (Save)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + A (Select All)
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + P (Print)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            return false;
        }
        // F12 (Dev Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Shift + I (Dev Tools)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Shift + J (Console)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Shift + C (Inspect Element)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Shift + K (Console in Firefox)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'K') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Option/Alt + I (Dev Tools Mac)
        if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'i') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Option/Alt + J (Console Mac)
        if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'j') {
            e.preventDefault();
            return false;
        }
        // Ctrl/Cmd + Option/Alt + U (View Source Mac)
        if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    }, false);

    // Disable dev tools detection (optional - detects when dev tools is opened)
    // This runs periodically to check if dev tools is open
    (function detectDevTools() {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            // Dev tools detected - you could redirect or show a message
            // document.body.innerHTML = '<h1 style="text-align:center;margin-top:50px;">Please close Developer Tools</h1>';
        }
    })();

    // Disable image dragging specifically
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.setAttribute('draggable', 'false');
            img.style.pointerEvents = 'none';
        });
    });

    // Console warning message
    console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.', 'font-size: 16px;');

})();
