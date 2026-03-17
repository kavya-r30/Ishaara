'use strict';
/* ============================================================================
   ISL Animations Bundle — Auto-generated
   Contains all alphabet and word sign animations for the ISL avatar.
   ============================================================================ */

window.ISL_ANIMATIONS = (function() {

// ── Default Pose ──────────────────────────────────────────────
const defaultPose = (ref) => {
    
    ref.characters.push(' ')
    let animations = []
    
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

// ── Rest Pose ────────────────────────────────────────────────
const restPose = (ref) => {
    let animations = [];

    // Right Arm/Forearm (back to default pose)
    // In defaultPose: rightArm z=Math.PI/3, rightForeArm y=Math.PI/1.5
    animations.push(["mixamorigRightArm", "rotation", "x", 0]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0]);
    
    // Right Hand (wrist)
    animations.push(["mixamorigRightHand", "rotation", "x", 0]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0]);
    
    // Fingers Right
    const fingers = ["Thumb", "Index", "Middle", "Ring", "Pinky"];
    for (let finger of fingers) {
        for (let i = 1; i <= 3; i++) {
            animations.push([`mixamorigRightHand${finger}${i}`, "rotation", "x", 0]);
            animations.push([`mixamorigRightHand${finger}${i}`, "rotation", "y", 0]);
            animations.push([`mixamorigRightHand${finger}${i}`, "rotation", "z", 0]);
        }
    }

    // Left Arm/Forearm (back to default pose)
    // In defaultPose: leftArm z=-Math.PI/3, leftForeArm y=-Math.PI/1.5
    animations.push(["mixamorigLeftArm", "rotation", "x", 0]);
    animations.push(["mixamorigLeftArm", "rotation", "y", 0]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0]);

    // Left Hand (wrist)
    animations.push(["mixamorigLeftHand", "rotation", "x", 0]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0]);

    // Fingers Left
    for (let finger of fingers) {
        for (let i = 1; i <= 3; i++) {
            animations.push([`mixamorigLeftHand${finger}${i}`, "rotation", "x", 0]);
            animations.push([`mixamorigLeftHand${finger}${i}`, "rotation", "y", 0]);
            animations.push([`mixamorigLeftHand${finger}${i}`, "rotation", "z", 0]);
        }
    }

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
}

// ── Alphabets ────────────────────────────────────────────────
const A = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/10, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/18, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/11, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/9, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI/72, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}

const B = (ref) => {

    let animations = []
    
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"]);
    
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/4.5, "-"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6.5, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const C = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const D = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/7.5, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const E = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/15, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const F = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/3, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/9, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}

const G = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/18, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/12, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/12, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/12, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}

const H = (ref) => {

    let animations = []
  
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "z", -Math.PI/15, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const I = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/1.55, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/13, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const J = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "z", Math.PI/2, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/36, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/2, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/3.7, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/7, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/12, "+"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const K = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/1.7, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/6, "-"]);
    
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/8, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4.1, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const L = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "z", Math.PI/4, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const M = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);
  
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const N = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);
  
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const O = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/1.45, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/15, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/13, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/18, "+"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const P = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.2, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/15, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/5, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/5.85, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const Q = (ref) => {

  let animations = []
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.2, "+"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.2, "+"]);
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/10, "-"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);

  animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"]);

  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);

  animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"]);
  
  animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/10, "+"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/10, "+"]);

  animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/2.8, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/3, "+"]);

  animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

  animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
  animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);
  animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/8.3, "-"]);

  ref.animations.push(animations);

      if(ref.pending === false){
    ref.pending = true;
    ref.animate();
  }
}

const R = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/8, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);
  
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2.3, "-"]);
  
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.3, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const S = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/33, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.6, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.7, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI*0.75, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const T = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/5.5, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/2.7, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/30, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/8.5, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const U = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/1.45, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/36, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/15, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/13, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/18, "+"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const V = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "y", -Math.PI/16, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/3, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}

const W = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "y", -Math.PI/12, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/24, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const X = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/32, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4.5, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/33, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/14, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const Y = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", +Math.PI/2.5, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/15, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/10, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/33, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.2, "+"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/3.5, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.2, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const Z = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"]); //7
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/9, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

// ── Words ────────────────────────────────────────────────────
const HOME = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/70, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/7, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/70, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);

    ref.animations.push(animations);

    animations = []
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/2.5, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/2.5, "-"]);

    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}

/**
 * ISL Animation: ME
 * Description: Point to chest with index finger.
 */

const ME = (ref) => {
    // 1. Raise arm and point to chest
    let step1 = [];
    step1.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);
    step1.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/4, "+"]);
    step1.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "+"]);
    // Index finger points
    step1.push(["mixamorigRightHandIndex1", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(step1);

    // 2. Slight movement towards chest
    let step2 = [];
    step2.push(["mixamorigRightArm", "rotation", "y", Math.PI/10, "+"]);
    ref.animations.push(step2);

    // 3. Return Pose
    let step3 = [];
    step3.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    step3.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    step3.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    step3.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    step3.push(["mixamorigRightHandIndex1", "rotation", "x", 0, "+"]);
    ref.animations.push(step3);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}

const PERSON = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/8, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/3, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.2, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/5, "-"]);

    ref.animations.push(animations);

    animations = []
    animations.push(["mixamorigRightArm", "rotation", "x", Math.PI/90, "+"]);
    ref.animations.push(animations);

        if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

const TIME = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"]);

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"]);

    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}

const YOU = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]);
    
    ref.animations.push(animations);

        if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}


return {
    alphabets: { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z },
    words: { HOME, ME, PERSON, TIME, YOU },
    defaultPose: defaultPose,
    restPose: restPose
};

})();
