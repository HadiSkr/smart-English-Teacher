import librosa
import buckeye
import numpy as np

# Assuming you have the following variables:
# mfccs: The MFCC matrix computed for the audio
# frame_duration: The duration of each frame in seconds
# phoneme_data: The example phoneme data

# Process the phoneme data


excluded_segments = {"aan","iyn","ayn","eyn","awn","aon","oyn","uwn","uhn","a","h","e","q","ern","uw ix","i","an","hhn","no","j","x", "id", "ah ix", "ih l", "ah n", "ah r", "ah l", "VOCNOISE", "NOISE", "EXCLUDE", "<EXCLUDE>",
                     "IVER y", "IVER-LAUGH", None, ", ", "None", "{E_TRANS}", "<exclude-Name>", "LAUGH", "IVER",
                     "{B_TRANS}", "UNKNOWN", "<EXCLUDE-name>"}
unique_segments = set()
segment_counts = {}

def clean():
    for speaker_num in range(1, 41):
        speaker_id = f's{speaker_num:02d}'  # Format the speaker ID with leading zeros if necessary
        zip_file_path = f'D:\\buckeye_dataset\\{speaker_id}.zip'
        speaker = buckeye.Speaker.from_zip(zip_file_path, load_wavs=True)
    
        for track in speaker:
            for phone in track.phones:
                if phone.dur>0.01 and phone.seg not in excluded_segments:
                    unique_segments.add(phone.seg)
                    segment_counts[phone.seg] = segment_counts.get(phone.seg, 0) + 1
    print(len(unique_segments))
    print(unique_segments)
    print(segment_counts)
"""""
aligned_labels = ['er', 'aa',
    'ahn',
    'ah',
    'tq',
    'nx',
    'jh',
    'own',
    'ihn',
    'hh',
    'ey',
    'v',
    'l',
    'dh',
    'uh',
    'f',
    'r',
    'uw',
    'aen',
    's',
    'ao',
    'b',
    't',
    'ih',
    'th',
    'oy',
    'SIL',
    'ch',
    'eng',
    'eh',
    'p',
    'sh',
    'ehn',
    'ay',
    'z',
    'w',
    'g',
    'm',
    'aw',
    'em',
    'el',
    'ae',
    'd',
    'k',
    'dx',
    'en',
    'y',
    'ow',
    'ng',
    'iy',
    'zh',
    'n']
"""
""""
label_encoder = LabelEncoder()
aligned_labels_encoded = label_encoder.fit_transform(aligned_labels)

onehot_encoder = OneHotEncoder(sparse=False)  # Set sparse=None explicitly
aligned_labels_onehot = onehot_encoder.fit_transform(aligned_labels_encoded.reshape(-1, 1))
"""
#print(aligned_labels_encoded)
# Output: [0 1 2 3 4]

#print(aligned_labels_onehot)











phoneme_dict = {
    'er': 0,
    'aa': 1,
    'ahn': 2,
    'ah': 3,
    'tq': 4,
    'nx': 5,
    'jh': 6,
    'own': 7,
    'ihn': 8,
    'hh': 9,
    'ey': 10,
    'v': 11,
    'l': 12,
    'dh': 13,
    'uh': 14,
    'f': 15,
    'r': 16,
    'uw': 17,
    'aen': 18,
    's': 19,
    'ao': 20,
    'b': 21,
    't': 22,
    'ih': 23,
    'th': 24,
    'oy': 25,
    'SIL': 26,
    'ch': 27,
    'eng': 28,
    'eh': 29,
    'p': 30,
    'sh': 31,
    'ehn': 32,
    'ay': 33,
    'z': 34,
    'w': 35,
    'g': 36,
    'm': 37,
    'aw': 38,
    'em': 39,
    'el': 40,
    'ae': 41,
    'd': 42,
    'k': 43,
    'dx': 44,
    'en': 45,
    'y': 46,
    'ow': 47,
    'ng': 48,
    'iy': 49,
    'zh': 50,
    'n': 51
}