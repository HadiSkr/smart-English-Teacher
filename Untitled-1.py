import buckeye
speaker = buckeye.Speaker.from_zip('C:\\Users\Hadi\\Downloads\\s01.zip', load_wavs=True)
print(speaker.name)
print(speaker.sex) # f for female, m for male
print(speaker.age) # o for old, y for young
print(speaker.interviewer) #
for track in speaker:
    print(track.name)
print(speaker.tracks)
track = speaker[0]
print(track)
print(track.words[:10])
word = track.words[4]
print(word.orthography)
print(word.beg)
print(word.end)
print(word.dur)
print(word.phonemic)
print(word.phonetic)
print(word.pos)
print(word.misaligned)
for phone in word.phones:
    print(phone.seg, phone.beg, phone.end, phone.dur)
pause = track.words[1]
print(pause.entry, pause.beg, pause.end, pause.dur, pause.misaligned)
print(pause.phones)
for phone in track.phones[:10]:
    print(phone.seg, phone.beg, phone.end, phone.dur)
for log in track.log:
    print(log.entry, log.beg, log.end, log.dur)
logs = track.get_logs(60.0, 62.0)

for log in logs:
    print(log.entry, log.beg, log.end)
print(track.txt[1])
speaker = buckeye.Speaker.from_zip('speakers/s01.zip', load_wavs=True)
track = speaker[0]
print(track.wav)
