import buckeye

# Open a file for writing and write speaker and track information to it
with open('extraction.txt', 'w') as outfile:
    # Loop through each speaker in the Buckeye dataset (speakers 1-40)
    for speaker_num in range(1, 41):
        # Load the Buckeye dataset for the current speaker
        zip_filename = f's{speaker_num:02d}.zip'
        speaker = buckeye.Speaker.from_zip(zip_filename, load_wavs=True)

        # Write speaker information to the output file
        outfile.write(f"Speaker {speaker_num}\n")
        outfile.write(f"Name: {speaker.name}\n")
        outfile.write(f"Sex: {speaker.sex}\n")
        outfile.write(f"Age: {speaker.age}\n")
        outfile.write(f"Interviewer: {speaker.interviewer}\n")

        # Loop through each track in the current speaker's dataset
        for track in speaker:
            # Write track information to the output file
            outfile.write(f"Track: {track.name}\n")
        outfile.write(f"Tracks: {speaker.tracks}\n")
        track = speaker[0]
        outfile.write(f"Track: {track}\n")
        outfile.write(f"Words: {track.words[:10]}\n")

        # Get information about a specific word in the current track
        word = track.words[4]
        outfile.write(f"Orthography: {word.orthography}\n")
        outfile.write(f"Beg: {word.beg}\n")
        outfile.write(f"End: {word.end}\n")
        outfile.write(f"Dur: {word.dur}\n")
        outfile.write(f"Phonemic: {word.phonemic}\n")
        outfile.write(f"Phonetic: {word.phonetic}\n")
        outfile.write(f"Pos: {word.pos}\n")
        outfile.write(f"Misaligned: {word.misaligned}\n")

        # Loop through each phone in the current word and write phone information to the output file
        for phone in word.phones:
            outfile.write(f"Phone: {phone.seg} {phone.beg} {phone.end} {phone.dur}\n")

        # Get information about a pause in the current track
        pause = track.words[1]
        outfile.write(f"Pause: {pause.entry} {pause.beg} {pause.end} {pause.dur} {pause.misaligned}\n")
        outfile.write(f"Pause phones: {pause.phones}\n")

        # Loop through each phone in the current track and write phone information to the output file
        for phone in track.phones[:10]:
            outfile.write(f"Phone: {phone.seg} {phone.beg} {phone.end} {phone.dur}\n")

        # Loop through each log entry in the current track and write log information to the output file
        for log in track.log:
            outfile.write(f"Log entry: {log.entry} {log.beg} {log.end} {log.dur}\n")

        # Get log entries within a specific time range in the current track and write them to the output file
        logs = track.get_logs(60.0, 62.0)
        for log in logs:
            outfile.write(f"Log entry: {log.entry} {log.beg} {log.end}\n")

        # Write the text of the current track to the output file
        outfile.write(f"Text: {track.txt[1]}\n")

        # Write the filename of the current track's WAV file to the output file
        speaker = buckeye.Speaker.from_zip(zip_filename, load_wavs=True)
        track = speaker[0]
        outfile.write(f"Wav: {track.wav}\n")