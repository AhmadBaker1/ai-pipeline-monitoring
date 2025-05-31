import csv
import time
import random
from datetime import datetime

# we will define how many data points we want to generate
NUM_ROWS = 5000 # generate 1000 fake readings for now
OUTPUT_FILE = 'normal_data.csv'

# we will then define the normal operating ranges for each sensor 
NORMAL_PRESSURE = (135, 165)  # Normal pressure range in psi 
NORMAL_FLOW = (11.0, 13.0)  # Barrels per hour
NORMAL_TEMP = (23, 37)  # Normal temperature in Celsius
NORMAL_VIBRATION = (0.015, 0.06) # mm/s

# we will create and open the CSV file to write data 
with open(OUTPUT_FILE, mode="w", newline='') as file:
    writer = csv.writer(file)
    # write the header row
    writer.writerow(["timestamp", "pressure", "flow_rate", "temperature", "vibration"])

    for _ in range(NUM_ROWS):
        # generate random values within the normal range
        pressure = round(random.uniform(*NORMAL_PRESSURE), 2) # this will pick a value between the min and max
        flow_rate = round(random.uniform(*NORMAL_FLOW), 2)
        temperature = round(random.uniform(*NORMAL_TEMP), 2) 
        vibration = round(random.uniform(*NORMAL_VIBRATION), 4)
        timestamp = datetime.now().isoformat()

        # write the row to the CSV file
        writer.writerow([timestamp, pressure, flow_rate, temperature, vibration])

        # we will simulate a real-time generation for now 
        time.sleep(0.01)