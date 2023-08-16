import librosa
import buckeye
import cleaneddata
import numpy as np
print("fetching the buckeye dataset .....")

phoneme_intervals = []
phoneme_labels = []
frame_duration = 0.01
excluded_segments = cleaneddata.excluded_segments
phoneme_dict = cleaneddata.phoneme_dict
sp = 0
corpus = buckeye.corpus('D:\\buckeye_dataset', load_wavs=True)

for speaker in corpus:
    if sp == 40:
        break
    for track in speaker:
        audio_file = fr"E:\buckeye_wav\{track.name}.wav"
        audio, sr = librosa.load(audio_file)
        mfccs = librosa.feature.mfcc(y=audio, sr=sr, hop_length=441)

        for phone in track.phones:
            if phone.dur > 0.01 and phone.seg not in excluded_segments:
                start_time = phone.beg
                end_time = phone.end
                phoneme_intervals.append((start_time, end_time))
                phoneme_labels.append(phoneme_dict[phone.seg])
    sp += 1

print("sad2")

frame_indices = []
for interval in phoneme_intervals:
    start_frame = int(interval[0] / frame_duration)
    end_frame = int(interval[1] / frame_duration)
    frame_indices.append((start_frame, end_frame))

print("sad3")

aligned_frames = []
aligned_labels = []
for indices in frame_indices:
    start_frame, end_frame = indices
    frames = mfccs[:, start_frame:end_frame]
    aligned_frames.append(frames)
    aligned_labels.append(phoneme_labels[len(aligned_frames) - 1])

# Print the length and shape of each list
print("Length of phoneme_intervals:", len(phoneme_intervals))
print("Length of phoneme_labels:", len(phoneme_labels))
print("Length of frame_indices:", len(frame_indices))
print("Length of aligned_frames:", len(aligned_frames))
print("Length of aligned_labels:", len(aligned_labels))

print("Shape of mfccs:", mfccs.shape)

# Determine the maximum shape of the subarrays


# Calculate the average length of the aligned frames

scaling_factor = 33


# Calculate the average length of the aligned frames
average_length = int(np.mean([len(frames[0]) for frames in aligned_frames]) * scaling_factor)

# Truncate longer sequences and pad shorter sequences
truncated_aligned_frames = []
for frames in aligned_frames:
    if len(frames[0]) > average_length:
        truncated_frames = frames[:, :average_length]
    else:
        padding = np.zeros((frames.shape[0], average_length - len(frames[0])))
        truncated_frames = np.concatenate((frames, padding), axis=1)
    truncated_aligned_frames.append(truncated_frames)

# Convert the list to a NumPy array
aligned_frames = np.array(truncated_aligned_frames)


# Print the length and shape of the modified array
print("Length of truncated_aligned_frames:", len(truncated_aligned_frames))
print("Shape of aligned_frames:", aligned_frames.shape)



# Print the length and shape of the modified array
aligned_labels = np.array(aligned_labels)
print("Shape of aligned_labels:", aligned_labels.shape)


print("bye")

"""
max_length = max(arr.shape[1] for arr in aligned_frames)

# Pad the sublists with a padding value
padding_value = 0
aligned_frames_padded = []
for arr in aligned_frames:
    num_frames = arr.shape[1]
    if num_frames < max_length:
        padding_width = max_length - num_frames
        padded_arr = np.pad(arr, ((0, 0), (0, padding_width)), constant_values=padding_value)
        aligned_frames_padded.append(padded_arr)
    else:
        aligned_frames_padded.append(arr)

aligned_frames = np.array(aligned_frames_padded)
aligned_labels = np.array(aligned_labels)

print(aligned_frames.shape)
"""

"""

import librosa
import buckeye
import soundfile as sf
import cleaneddata 
import numpy as np
import time

start_time = time.time() 

phoneme_intervals = []
phoneme_labels = []
frame_duration = 0.01
excluded_segments = cleaneddata.excluded_segments

corpus = buckeye.corpus('D:\\buckeye_dataset', load_wavs=True)
for speaker in corpus:
    for track in speaker:
        audio_file = fr"E:\buckeye_wav\{track.name}.wav"
        audio, sr = librosa.load(audio_file)
        mfccs = librosa.feature.mfcc(y=audio, sr=sr, hop_length=441)
        pitches, magnitudes = librosa.piptrack(y=audio, sr=sr, hop_length=441)

        for phone in track.phones:
            if phone.dur > 0.01 and phone.seg not in excluded_segments:
                start_time = phone.beg
                end_time = phone.end
                phoneme_intervals.append((start_time, end_time))
                phoneme_labels.append(phone.seg)

frame_indices = []
for interval in phoneme_intervals:
    start_frame = int(interval[0] / frame_duration)
    end_frame = int(interval[1] / frame_duration)
    frame_indices.append((start_frame, end_frame))

aligned_frames = []
aligned_labels = []
for indices in frame_indices:
    start_frame, end_frame = indices
    frames = mfccs[:, start_frame:end_frame]

    # Add pitch features to the frames
    pitch_frames = pitches[:, start_frame:end_frame]
    frames_with_pitch = np.vstack((frames, pitch_frames))

    aligned_frames.append(frames_with_pitch)
    aligned_labels.append(phoneme_labels[len(aligned_frames) - 1])

end_time = time.time()
elapsed_time = end_time - start_time

# Print the length and shape of each list
print("Length of phoneme_intervals:", len(phoneme_intervals))
print("Length of phoneme_labels:", len(phoneme_labels))
print("Length of frame_indices:", len(frame_indices))print("Length of aligned_frames:", len(aligned_frames))
print("Length of aligned_labels:", len(aligned_labels))

print("Shape of mfccs:", mfccs.shape)
print("Shape of pitches:", pitches.shape)
print("Shape of frames_with_pitch:", frames_with_pitch.shape)








print("First 10 values of phoneme_intervals:", phoneme_intervals[:10])
print("First 10 values of phoneme_labels:", phoneme_labels[:10])
print("First 10 values of frame_indices:", frame_indices[:10])
print("First 10 values of aligned_frames:", aligned_frames[:10])
print("First 10 values of aligned_labels:", aligned_labels[:10])

print("Shape of mfccs:", mfccs.shape)
print("First 10 values of mfccs:")
print(mfccs[:10])

print("Shape of pitches:", pitches.shape)
print("First 10 values of pitches:")
print(pitches[:10])

print("Shape of frames_with_pitch:", frames_with_pitch.shape)
print("First 10 values of frames_with_pitch:")
print(frames_with_pitch[:10])
"""