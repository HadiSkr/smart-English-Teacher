import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# Assuming alignes
# d_frames is X and aligned_labels is y
X = np.random.random((890144, 20, 25))  # Shape: (num_samples, timesteps, input_dim)
y = np.random.randint(0, 52, (890144,))  # Shape: (num_samples,)

#num_classes = len(np.unique(y))  # Number of unique phoneme classes

# Define the LSTM model
model = Sequential()
model.add(LSTM(64, input_shape=(20, 25)))  # Input shape: (timesteps, input_dim)
model.add(Dropout(0.2))  # Dropout layer with 20% dropout rate
model.add(Dense(52, activation='softmax'))  # Output shape: (num_classes,)

# Compile the model
model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
model.fit(X, y, epochs=10, batch_size=32)

# Make predictions
predictions = model.predict(X)

# Evaluate the model
_, accuracy = model.evaluate(X, y)
print("Accuracy:", accuracy)