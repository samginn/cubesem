const targets = [
  // [50, [{ x: 0, y: 0, z: 0, color: "Red" }]],
  // horizontal plates
  [15, [{"x":5,"y":5,"z":0,"color":"Orange","names":[]},{"x":5,"y":4,"z":0,"color":"Orange","names":[]},{"x":5,"y":3,"z":0,"color":"Orange","names":[]},{"x":5,"y":2,"z":0,"color":"Orange","names":[]},{"x":5,"y":1,"z":0,"color":"Orange","names":[]},{"x":5,"y":0,"z":0,"color":"Orange","names":[]},{"x":4,"y":5,"z":0,"color":"Orange","names":[]},{"x":4,"y":4,"z":0,"color":"Orange","names":[]},{"x":4,"y":3,"z":0,"color":"Orange","names":[]},{"x":4,"y":2,"z":0,"color":"Orange","names":[]},{"x":4,"y":1,"z":0,"color":"Orange","names":[]},{"x":4,"y":0,"z":0,"color":"Orange","names":[]},{"x":3,"y":5,"z":0,"color":"Orange","names":[]},{"x":3,"y":4,"z":0,"color":"Orange","names":[]},{"x":3,"y":3,"z":0,"color":"Orange","names":[]},{"x":3,"y":2,"z":0,"color":"Orange","names":[]},{"x":3,"y":1,"z":0,"color":"Orange","names":[]},{"x":3,"y":0,"z":0,"color":"Orange","names":[]},{"x":2,"y":5,"z":0,"color":"Orange","names":[]},{"x":2,"y":4,"z":0,"color":"Orange","names":[]},{"x":2,"y":3,"z":0,"color":"Orange","names":[]},{"x":2,"y":2,"z":0,"color":"Orange","names":[]},{"x":2,"y":1,"z":0,"color":"Orange","names":[]},{"x":2,"y":0,"z":0,"color":"Orange","names":[]},{"x":1,"y":5,"z":0,"color":"Orange","names":[]},{"x":1,"y":4,"z":0,"color":"Orange","names":[]},{"x":1,"y":3,"z":0,"color":"Orange","names":[]},{"x":1,"y":2,"z":0,"color":"Orange","names":[]},{"x":1,"y":1,"z":0,"color":"Orange","names":[]},{"x":1,"y":0,"z":0,"color":"Orange","names":[]},{"x":0,"y":5,"z":0,"color":"Orange","names":[]},{"x":0,"y":4,"z":0,"color":"Orange","names":[]},{"x":0,"y":3,"z":0,"color":"Orange","names":[]},{"x":0,"y":2,"z":0,"color":"Orange","names":[]},{"x":0,"y":1,"z":0,"color":"Orange","names":[]},{"x":0,"y":0,"z":0,"color":"Orange","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":["S"]},{"x":4,"y":2,"z":1,"color":"Red","names":["S"]},{"x":4,"y":1,"z":1,"color":"Red","names":["S"]},{"x":4,"y":0,"z":1,"color":"Red","names":["S"]},{"x":3,"y":3,"z":1,"color":"Red","names":["S"]},{"x":3,"y":2,"z":1,"color":"Red","names":["S"]},{"x":3,"y":1,"z":1,"color":"Red","names":["S"]},{"x":3,"y":0,"z":1,"color":"Red","names":["S"]},{"x":2,"y":3,"z":1,"color":"Red","names":["S"]},{"x":2,"y":2,"z":1,"color":"Red","names":["S"]},{"x":2,"y":1,"z":1,"color":"Red","names":["S"]},{"x":2,"y":0,"z":1,"color":"Red","names":["S"]},{"x":1,"y":3,"z":1,"color":"Red","names":["S"]},{"x":1,"y":2,"z":1,"color":"Red","names":["S"]},{"x":1,"y":1,"z":1,"color":"Red","names":["S"]},{"x":1,"y":0,"z":1,"color":"Red","names":["S"]},{"x":4,"y":4,"z":2,"color":"Yellow","names":[]},{"x":4,"y":3,"z":2,"color":"Yellow","names":[]},{"x":4,"y":2,"z":2,"color":"Yellow","names":[]},{"x":4,"y":1,"z":2,"color":"Yellow","names":[]},{"x":3,"y":4,"z":2,"color":"Yellow","names":[]},{"x":3,"y":3,"z":2,"color":"Yellow","names":[]},{"x":3,"y":2,"z":2,"color":"Yellow","names":[]},{"x":3,"y":1,"z":2,"color":"Yellow","names":[]},{"x":2,"y":4,"z":2,"color":"Yellow","names":[]},{"x":2,"y":3,"z":2,"color":"Yellow","names":[]},{"x":2,"y":2,"z":2,"color":"Yellow","names":[]},{"x":2,"y":1,"z":2,"color":"Yellow","names":[]},{"x":1,"y":4,"z":2,"color":"Yellow","names":[]},{"x":1,"y":3,"z":2,"color":"Yellow","names":[]},{"x":1,"y":2,"z":2,"color":"Yellow","names":[]},{"x":1,"y":1,"z":2,"color":"Yellow","names":[]}]],
  // [14, [{"x":0,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":0,"color":"Brown","names":[]},{"x":2,"y":8,"z":0,"color":"Brown","names":[]},{"x":7,"y":8,"z":0,"color":"Green","names":[]},{"x":8,"y":8,"z":0,"color":"Green","names":[]},{"x":9,"y":8,"z":0,"color":"Green","names":[]},{"x":0,"y":8,"z":1,"color":"Brown","names":[]},{"x":1,"y":8,"z":1,"color":"Brown","names":[]},{"x":2,"y":8,"z":1,"color":"Brown","names":[]},{"x":7,"y":8,"z":1,"color":"Green","names":[]},{"x":8,"y":8,"z":1,"color":"Green","names":[]},{"x":9,"y":8,"z":1,"color":"Green","names":[]},{"x":0,"y":1,"z":0,"color":"Red","names":[]},{"x":1,"y":1,"z":0,"color":"Red","names":[]},{"x":2,"y":1,"z":0,"color":"Red","names":[]},{"x":0,"y":8,"z":2,"color":"Brown","names":[]},{"x":1,"y":8,"z":2,"color":"Brown","names":[]},{"x":7,"y":1,"z":0,"color":"Yellow","names":[]},{"x":2,"y":8,"z":2,"color":"Brown","names":[]},{"x":8,"y":1,"z":0,"color":"Yellow","names":[]},{"x":9,"y":1,"z":0,"color":"Yellow","names":[]},{"x":7,"y":8,"z":2,"color":"Green","names":[]},{"x":8,"y":8,"z":2,"color":"Green","names":[]},{"x":9,"y":8,"z":2,"color":"Green","names":[]},{"x":0,"y":1,"z":1,"color":"Red","names":[]},{"x":1,"y":1,"z":1,"color":"Red","names":[]},{"x":2,"y":1,"z":1,"color":"Red","names":[]},{"x":7,"y":1,"z":1,"color":"Yellow","names":[]},{"x":8,"y":1,"z":1,"color":"Yellow","names":[]},{"x":9,"y":1,"z":1,"color":"Yellow","names":[]},{"x":0,"y":1,"z":2,"color":"Red","names":[]},{"x":1,"y":1,"z":2,"color":"Red","names":[]},{"x":2,"y":1,"z":2,"color":"Red","names":[]},{"x":7,"y":1,"z":2,"color":"Yellow","names":[]},{"x":8,"y":1,"z":2,"color":"Yellow","names":[]},{"x":9,"y":1,"z":2,"color":"Yellow","names":[]},{"x":0,"y":9,"z":0,"color":"Brown","names":[]},{"x":1,"y":9,"z":0,"color":"Brown","names":[]},{"x":2,"y":9,"z":0,"color":"Brown","names":[]},{"x":7,"y":9,"z":0,"color":"Green","names":[]},{"x":8,"y":9,"z":0,"color":"Green","names":[]},{"x":9,"y":9,"z":0,"color":"Green","names":[]},{"x":0,"y":9,"z":1,"color":"Brown","names":[]},{"x":1,"y":9,"z":1,"color":"Brown","names":[]},{"x":2,"y":9,"z":1,"color":"Brown","names":[]},{"x":7,"y":9,"z":1,"color":"Green","names":[]},{"x":8,"y":9,"z":1,"color":"Green","names":[]},{"x":9,"y":9,"z":1,"color":"Green","names":[]},{"x":0,"y":2,"z":0,"color":"Red","names":[]},{"x":1,"y":2,"z":0,"color":"Red","names":[]},{"x":2,"y":2,"z":0,"color":"Red","names":[]},{"x":0,"y":9,"z":2,"color":"Brown","names":[]},{"x":1,"y":9,"z":2,"color":"Brown","names":[]},{"x":7,"y":2,"z":0,"color":"Yellow","names":[]},{"x":2,"y":9,"z":2,"color":"Brown","names":[]},{"x":8,"y":2,"z":0,"color":"Yellow","names":[]},{"x":9,"y":2,"z":0,"color":"Yellow","names":[]},{"x":7,"y":9,"z":2,"color":"Green","names":[]},{"x":0,"y":7,"z":0,"color":"Brown","names":[]},{"x":8,"y":9,"z":2,"color":"Green","names":[]},{"x":1,"y":7,"z":0,"color":"Brown","names":[]},{"x":9,"y":9,"z":2,"color":"Green","names":[]},{"x":2,"y":7,"z":0,"color":"Brown","names":[]},{"x":0,"y":2,"z":1,"color":"Red","names":[]},{"x":7,"y":7,"z":0,"color":"Green","names":[]},{"x":1,"y":2,"z":1,"color":"Red","names":[]},{"x":8,"y":7,"z":0,"color":"Green","names":[]},{"x":2,"y":2,"z":1,"color":"Red","names":[]},{"x":9,"y":7,"z":0,"color":"Green","names":[]},{"x":7,"y":2,"z":1,"color":"Yellow","names":[]},{"x":8,"y":2,"z":1,"color":"Yellow","names":[]},{"x":9,"y":2,"z":1,"color":"Yellow","names":[]},{"x":0,"y":7,"z":1,"color":"Brown","names":[]},{"x":1,"y":7,"z":1,"color":"Brown","names":[]},{"x":2,"y":7,"z":1,"color":"Brown","names":[]},{"x":0,"y":2,"z":2,"color":"Red","names":[]},{"x":7,"y":7,"z":1,"color":"Green","names":[]},{"x":1,"y":2,"z":2,"color":"Red","names":[]},{"x":8,"y":7,"z":1,"color":"Green","names":[]},{"x":2,"y":2,"z":2,"color":"Red","names":[]},{"x":9,"y":7,"z":1,"color":"Green","names":[]},{"x":7,"y":2,"z":2,"color":"Yellow","names":[]},{"x":0,"y":0,"z":0,"color":"Red","names":[]},{"x":8,"y":2,"z":2,"color":"Yellow","names":[]},{"x":1,"y":0,"z":0,"color":"Red","names":[]},{"x":9,"y":2,"z":2,"color":"Yellow","names":[]},{"x":2,"y":0,"z":0,"color":"Red","names":[]},{"x":0,"y":7,"z":2,"color":"Brown","names":[]},{"x":1,"y":7,"z":2,"color":"Brown","names":[]},{"x":7,"y":0,"z":0,"color":"Yellow","names":[]},{"x":2,"y":7,"z":2,"color":"Brown","names":[]},{"x":8,"y":0,"z":0,"color":"Yellow","names":[]},{"x":9,"y":0,"z":0,"color":"Yellow","names":[]},{"x":7,"y":7,"z":2,"color":"Green","names":[]},{"x":8,"y":7,"z":2,"color":"Green","names":[]},{"x":9,"y":7,"z":2,"color":"Green","names":[]},{"x":0,"y":0,"z":1,"color":"Red","names":[]},{"x":1,"y":0,"z":1,"color":"Red","names":[]},{"x":2,"y":0,"z":1,"color":"Red","names":[]},{"x":7,"y":0,"z":1,"color":"Yellow","names":[]},{"x":8,"y":0,"z":1,"color":"Yellow","names":[]},{"x":9,"y":0,"z":1,"color":"Yellow","names":[]},{"x":0,"y":0,"z":2,"color":"Red","names":[]},{"x":1,"y":0,"z":2,"color":"Red","names":[]},{"x":2,"y":0,"z":2,"color":"Red","names":[]},{"x":7,"y":0,"z":2,"color":"Yellow","names":[]},{"x":8,"y":0,"z":2,"color":"Yellow","names":[]},{"x":9,"y":0,"z":2,"color":"Yellow","names":[]}]],
  // [16, [{"x":3,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":5,"color":"Green","names":[]},{"x":2,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":1,"color":"Brown","names":[]},{"x":5,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":2,"color":"Brown","names":[]},{"x":5,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":5,"color":"Green","names":[]},{"x":6,"y":5,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":2,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":6,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":3,"z":5,"color":"Green","names":[]},{"x":5,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":5,"color":"Green","names":[]},{"x":2,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":1,"color":"Brown","names":[]},{"x":6,"y":2,"z":4,"color":"Green","names":[]},{"x":4,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":4,"color":"Green","names":[]},{"x":2,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":4,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":2,"color":"Brown","names":[]},{"x":5,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":1,"color":"Brown","names":[]},{"x":4,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":3,"color":"Brown","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":1,"color":"Brown","names":[]},{"x":2,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":5,"color":"Green","names":[]},{"x":5,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":4,"color":"Green","names":[]},{"x":4,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":3,"color":"Brown","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]}]],
  // [13, [{"x":0,"y":3,"z":0,"color":"Yellow","names":[]},{"x":1,"y":3,"z":0,"color":"Yellow","names":[]},{"x":2,"y":3,"z":0,"color":"Yellow","names":[]},{"x":3,"y":3,"z":0,"color":"Yellow","names":[]},{"x":4,"y":3,"z":0,"color":"Yellow","names":[]},{"x":5,"y":3,"z":0,"color":"Yellow","names":[]},{"x":6,"y":3,"z":0,"color":"Yellow","names":[]},{"x":7,"y":3,"z":0,"color":"Yellow","names":[]},{"x":8,"y":3,"z":0,"color":"Yellow","names":[]},{"x":9,"y":3,"z":0,"color":"Yellow","names":[]},{"x":0,"y":5,"z":0,"color":"Blue","names":[]},{"x":0,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":5,"z":0,"color":"Blue","names":[]},{"x":2,"y":3,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":0,"color":"Blue","names":[]},{"x":0,"y":2,"z":0,"color":"Blue","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":5,"z":0,"color":"Blue","names":[]},{"x":2,"y":2,"z":0,"color":"Blue","names":[]},{"x":6,"y":3,"z":1,"color":"Red","names":[]},{"x":8,"y":5,"z":0,"color":"Blue","names":[]},{"x":4,"y":2,"z":0,"color":"Blue","names":[]},{"x":8,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":2,"z":0,"color":"Blue","names":[]},{"x":8,"y":2,"z":0,"color":"Blue","names":[]},{"x":0,"y":3,"z":2,"color":"Red","names":[]},{"x":2,"y":3,"z":2,"color":"Red","names":[]},{"x":0,"y":4,"z":0,"color":"Blue","names":[]},{"x":4,"y":3,"z":2,"color":"Red","names":[]},{"x":2,"y":4,"z":0,"color":"Blue","names":[]},{"x":6,"y":3,"z":2,"color":"Red","names":[]},{"x":4,"y":4,"z":0,"color":"Blue","names":[]},{"x":0,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":3,"z":2,"color":"Red","names":[]},{"x":6,"y":4,"z":0,"color":"Blue","names":[]},{"x":2,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":4,"z":0,"color":"Blue","names":[]},{"x":4,"y":1,"z":0,"color":"Blue","names":[]},{"x":6,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":1,"z":0,"color":"Blue","names":[]}]],
  // [13, [{"x":1,"y":3,"z":3,"color":"Green","names":[]},{"x":2,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":3,"color":"Green","names":[]},{"x":4,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":1,"z":4,"color":"Green","names":[]},{"x":5,"y":3,"z":3,"color":"Green","names":[]},{"x":6,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":0,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":5,"color":"Green","names":[]},{"x":1,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":5,"z":3,"color":"Green","names":[]},{"x":2,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":3,"z":4,"color":"Green","names":[]},{"x":5,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":5,"z":4,"color":"Green","names":[]},{"x":2,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":5,"color":"Green","names":[]},{"x":4,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":3,"color":"Green","names":[]},{"x":3,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]},{"x":3,"y":1,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":6,"color":"Green","names":[]},{"x":3,"y":6,"z":3,"color":"Green","names":[]},{"x":3,"y":4,"z":4,"color":"Green","names":[]},{"x":0,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":2,"z":5,"color":"Green","names":[]}]],
  // [13, [{"x":2,"y":5,"z":2,"color":"Green","names":[]},{"x":3,"y":5,"z":2,"color":"Green","names":[]},{"x":4,"y":5,"z":2,"color":"Green","names":[]},{"x":5,"y":5,"z":2,"color":"Green","names":[]},{"x":6,"y":5,"z":2,"color":"Green","names":[]},{"x":7,"y":5,"z":2,"color":"Green","names":[]},{"x":0,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":3,"color":"Blue","names":[]},{"x":2,"y":8,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":3,"color":"Blue","names":[]},{"x":3,"y":8,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":3,"color":"Blue","names":[]},{"x":4,"y":8,"z":0,"color":"Brown","names":[]},{"x":6,"y":5,"z":3,"color":"Blue","names":[]},{"x":5,"y":8,"z":0,"color":"Brown","names":[]},{"x":6,"y":8,"z":0,"color":"Brown","names":[]},{"x":7,"y":8,"z":0,"color":"Brown","names":[]},{"x":8,"y":8,"z":0,"color":"Brown","names":[]},{"x":9,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":1,"color":"Red","names":[]},{"x":2,"y":8,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":4,"color":"Yellow","names":[]},{"x":3,"y":8,"z":1,"color":"Red","names":[]},{"x":5,"y":5,"z":4,"color":"Yellow","names":[]},{"x":4,"y":8,"z":1,"color":"Red","names":[]},{"x":5,"y":8,"z":1,"color":"Red","names":[]},{"x":6,"y":8,"z":1,"color":"Red","names":[]},{"x":7,"y":8,"z":1,"color":"Red","names":[]},{"x":8,"y":8,"z":1,"color":"Red","names":[]},{"x":0,"y":1,"z":0,"color":"Brown","names":[]},{"x":1,"y":1,"z":0,"color":"Brown","names":[]},{"x":2,"y":1,"z":0,"color":"Brown","names":[]},{"x":3,"y":1,"z":0,"color":"Brown","names":[]},{"x":4,"y":1,"z":0,"color":"Brown","names":[]},{"x":5,"y":1,"z":0,"color":"Brown","names":[]},{"x":6,"y":1,"z":0,"color":"Brown","names":[]},{"x":7,"y":1,"z":0,"color":"Brown","names":[]},{"x":8,"y":1,"z":0,"color":"Brown","names":[]},{"x":9,"y":1,"z":0,"color":"Brown","names":[]},{"x":1,"y":1,"z":1,"color":"Red","names":[]},{"x":2,"y":1,"z":1,"color":"Red","names":[]},{"x":3,"y":1,"z":1,"color":"Red","names":[]},{"x":4,"y":1,"z":1,"color":"Red","names":[]},{"x":5,"y":1,"z":1,"color":"Red","names":[]},{"x":6,"y":1,"z":1,"color":"Red","names":[]},{"x":7,"y":1,"z":1,"color":"Red","names":[]},{"x":8,"y":1,"z":1,"color":"Red","names":[]},{"x":0,"y":4,"z":0,"color":"Brown","names":[]},{"x":1,"y":4,"z":0,"color":"Brown","names":[]},{"x":2,"y":4,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":6,"y":4,"z":0,"color":"Brown","names":[]},{"x":7,"y":4,"z":0,"color":"Brown","names":[]},{"x":8,"y":4,"z":0,"color":"Brown","names":[]},{"x":9,"y":4,"z":0,"color":"Brown","names":[]},{"x":1,"y":4,"z":1,"color":"Red","names":[]},{"x":2,"y":4,"z":1,"color":"Red","names":[]},{"x":3,"y":4,"z":1,"color":"Red","names":[]},{"x":4,"y":4,"z":1,"color":"Red","names":[]},{"x":5,"y":4,"z":1,"color":"Red","names":[]},{"x":6,"y":4,"z":1,"color":"Red","names":[]},{"x":7,"y":4,"z":1,"color":"Red","names":[]},{"x":8,"y":4,"z":1,"color":"Red","names":[]},{"x":2,"y":4,"z":2,"color":"Green","names":[]},{"x":3,"y":4,"z":2,"color":"Green","names":[]},{"x":4,"y":4,"z":2,"color":"Green","names":[]},{"x":5,"y":4,"z":2,"color":"Green","names":[]},{"x":6,"y":4,"z":2,"color":"Green","names":[]},{"x":7,"y":4,"z":2,"color":"Green","names":[]},{"x":0,"y":7,"z":0,"color":"Brown","names":[]},{"x":1,"y":7,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":3,"color":"Blue","names":[]},{"x":2,"y":7,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":3,"color":"Blue","names":[]},{"x":3,"y":7,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":3,"color":"Blue","names":[]},{"x":4,"y":7,"z":0,"color":"Brown","names":[]},{"x":6,"y":4,"z":3,"color":"Blue","names":[]},{"x":5,"y":7,"z":0,"color":"Brown","names":[]},{"x":6,"y":7,"z":0,"color":"Brown","names":[]},{"x":7,"y":7,"z":0,"color":"Brown","names":[]},{"x":8,"y":7,"z":0,"color":"Brown","names":[]},{"x":9,"y":7,"z":0,"color":"Brown","names":[]},{"x":1,"y":7,"z":1,"color":"Red","names":[]},{"x":2,"y":7,"z":1,"color":"Red","names":[]},{"x":4,"y":4,"z":4,"color":"Yellow","names":[]},{"x":3,"y":7,"z":1,"color":"Red","names":[]},{"x":5,"y":4,"z":4,"color":"Yellow","names":[]},{"x":4,"y":7,"z":1,"color":"Red","names":[]},{"x":5,"y":7,"z":1,"color":"Red","names":[]},{"x":6,"y":7,"z":1,"color":"Red","names":[]},{"x":7,"y":7,"z":1,"color":"Red","names":[]},{"x":8,"y":7,"z":1,"color":"Red","names":[]},{"x":0,"y":0,"z":0,"color":"Brown","names":[]},{"x":1,"y":0,"z":0,"color":"Brown","names":[]},{"x":2,"y":0,"z":0,"color":"Brown","names":[]},{"x":3,"y":0,"z":0,"color":"Brown","names":[]},{"x":4,"y":0,"z":0,"color":"Brown","names":[]},{"x":5,"y":0,"z":0,"color":"Brown","names":[]},{"x":6,"y":0,"z":0,"color":"Brown","names":[]},{"x":7,"y":0,"z":0,"color":"Brown","names":[]},{"x":2,"y":7,"z":2,"color":"Green","names":[]},{"x":8,"y":0,"z":0,"color":"Brown","names":[]},{"x":3,"y":7,"z":2,"color":"Green","names":[]},{"x":9,"y":0,"z":0,"color":"Brown","names":[]},{"x":4,"y":7,"z":2,"color":"Green","names":[]},{"x":5,"y":7,"z":2,"color":"Green","names":[]},{"x":6,"y":7,"z":2,"color":"Green","names":[]},{"x":7,"y":7,"z":2,"color":"Green","names":[]},{"x":0,"y":3,"z":0,"color":"Brown","names":[]},{"x":1,"y":3,"z":0,"color":"Brown","names":[]},{"x":2,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":0,"color":"Brown","names":[]},{"x":7,"y":3,"z":0,"color":"Brown","names":[]},{"x":8,"y":3,"z":0,"color":"Brown","names":[]},{"x":9,"y":3,"z":0,"color":"Brown","names":[]},{"x":1,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":3,"z":1,"color":"Red","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":[]},{"x":5,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":3,"z":1,"color":"Red","names":[]},{"x":7,"y":3,"z":1,"color":"Red","names":[]},{"x":8,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":3,"z":2,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Green","names":[]},{"x":4,"y":3,"z":2,"color":"Green","names":[]},{"x":5,"y":3,"z":2,"color":"Green","names":[]},{"x":6,"y":3,"z":2,"color":"Green","names":[]},{"x":7,"y":3,"z":2,"color":"Green","names":[]},{"x":0,"y":6,"z":0,"color":"Brown","names":[]},{"x":1,"y":6,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":3,"color":"Blue","names":[]},{"x":2,"y":6,"z":0,"color":"Brown","names":[]},{"x":4,"y":3,"z":3,"color":"Blue","names":[]},{"x":3,"y":6,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":3,"color":"Blue","names":[]},{"x":4,"y":6,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":3,"color":"Blue","names":[]},{"x":5,"y":6,"z":0,"color":"Brown","names":[]},{"x":6,"y":6,"z":0,"color":"Brown","names":[]},{"x":7,"y":6,"z":0,"color":"Brown","names":[]},{"x":8,"y":6,"z":0,"color":"Brown","names":[]},{"x":9,"y":6,"z":0,"color":"Brown","names":[]},{"x":1,"y":6,"z":1,"color":"Red","names":[]},{"x":2,"y":6,"z":1,"color":"Red","names":[]},{"x":3,"y":6,"z":1,"color":"Red","names":[]},{"x":4,"y":6,"z":1,"color":"Red","names":[]},{"x":5,"y":6,"z":1,"color":"Red","names":[]},{"x":6,"y":6,"z":1,"color":"Red","names":[]},{"x":7,"y":6,"z":1,"color":"Red","names":[]},{"x":8,"y":6,"z":1,"color":"Red","names":[]},{"x":2,"y":6,"z":2,"color":"Green","names":[]},{"x":3,"y":6,"z":2,"color":"Green","names":[]},{"x":4,"y":6,"z":2,"color":"Green","names":[]},{"x":5,"y":6,"z":2,"color":"Green","names":[]},{"x":6,"y":6,"z":2,"color":"Green","names":[]},{"x":7,"y":6,"z":2,"color":"Green","names":[]},{"x":0,"y":9,"z":0,"color":"Brown","names":[]},{"x":1,"y":9,"z":0,"color":"Brown","names":[]},{"x":3,"y":6,"z":3,"color":"Blue","names":[]},{"x":2,"y":9,"z":0,"color":"Brown","names":[]},{"x":4,"y":6,"z":3,"color":"Blue","names":[]},{"x":3,"y":9,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":3,"color":"Blue","names":[]},{"x":4,"y":9,"z":0,"color":"Brown","names":[]},{"x":6,"y":6,"z":3,"color":"Blue","names":[]},{"x":5,"y":9,"z":0,"color":"Brown","names":[]},{"x":6,"y":9,"z":0,"color":"Brown","names":[]},{"x":7,"y":9,"z":0,"color":"Brown","names":[]},{"x":8,"y":9,"z":0,"color":"Brown","names":[]},{"x":9,"y":9,"z":0,"color":"Brown","names":[]},{"x":0,"y":2,"z":0,"color":"Brown","names":[]},{"x":1,"y":2,"z":0,"color":"Brown","names":[]},{"x":2,"y":2,"z":0,"color":"Brown","names":[]},{"x":3,"y":2,"z":0,"color":"Brown","names":[]},{"x":4,"y":2,"z":0,"color":"Brown","names":[]},{"x":5,"y":2,"z":0,"color":"Brown","names":[]},{"x":6,"y":2,"z":0,"color":"Brown","names":[]},{"x":7,"y":2,"z":0,"color":"Brown","names":[]},{"x":8,"y":2,"z":0,"color":"Brown","names":[]},{"x":9,"y":2,"z":0,"color":"Brown","names":[]},{"x":1,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":2,"z":1,"color":"Red","names":[]},{"x":3,"y":2,"z":1,"color":"Red","names":[]},{"x":4,"y":2,"z":1,"color":"Red","names":[]},{"x":5,"y":2,"z":1,"color":"Red","names":[]},{"x":6,"y":2,"z":1,"color":"Red","names":[]},{"x":7,"y":2,"z":1,"color":"Red","names":[]},{"x":8,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":2,"z":2,"color":"Green","names":[]},{"x":3,"y":2,"z":2,"color":"Green","names":[]},{"x":4,"y":2,"z":2,"color":"Green","names":[]},{"x":5,"y":2,"z":2,"color":"Green","names":[]},{"x":6,"y":2,"z":2,"color":"Green","names":[]},{"x":7,"y":2,"z":2,"color":"Green","names":[]},{"x":0,"y":5,"z":0,"color":"Brown","names":[]},{"x":1,"y":5,"z":0,"color":"Brown","names":[]},{"x":2,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":6,"y":5,"z":0,"color":"Brown","names":[]},{"x":7,"y":5,"z":0,"color":"Brown","names":[]},{"x":8,"y":5,"z":0,"color":"Brown","names":[]},{"x":9,"y":5,"z":0,"color":"Brown","names":[]},{"x":1,"y":5,"z":1,"color":"Red","names":[]},{"x":2,"y":5,"z":1,"color":"Red","names":[]},{"x":3,"y":5,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":1,"color":"Red","names":[]},{"x":5,"y":5,"z":1,"color":"Red","names":[]},{"x":6,"y":5,"z":1,"color":"Red","names":[]},{"x":7,"y":5,"z":1,"color":"Red","names":[]},{"x":8,"y":5,"z":1,"color":"Red","names":[]}]],
  // some collection of cubes

  // cubes
  [15, [{"x":2,"y":2,"z":0,"color":"Red","names":[]},{"x":2,"y":1,"z":0,"color":"Red","names":[]},{"x":2,"y":0,"z":0,"color":"Red","names":[]},{"x":1,"y":2,"z":0,"color":"Red","names":[]},{"x":1,"y":1,"z":0,"color":"Red","names":[]},{"x":1,"y":0,"z":0,"color":"Red","names":[]},{"x":1,"y":-4,"z":0,"color":"Brown","names":[]},{"x":1,"y":-5,"z":0,"color":"Brown","names":[]},{"x":1,"y":-6,"z":0,"color":"Brown","names":[]},{"x":0,"y":2,"z":0,"color":"Red","names":[]},{"x":0,"y":1,"z":0,"color":"Red","names":[]},{"x":0,"y":0,"z":0,"color":"Red","names":[]},{"x":0,"y":-4,"z":0,"color":"Brown","names":[]},{"x":0,"y":-5,"z":0,"color":"Brown","names":[]},{"x":0,"y":-6,"z":0,"color":"Brown","names":[]},{"x":-1,"y":-4,"z":0,"color":"Brown","names":[]},{"x":-1,"y":-5,"z":0,"color":"Brown","names":[]},{"x":-1,"y":-6,"z":0,"color":"Brown","names":[]},{"x":2,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":1,"z":1,"color":"Red","names":[]},{"x":2,"y":0,"z":1,"color":"Red","names":[]},{"x":1,"y":2,"z":1,"color":"Red","names":[]},{"x":1,"y":1,"z":1,"color":"Red","names":[]},{"x":1,"y":0,"z":1,"color":"Red","names":[]},{"x":1,"y":-4,"z":1,"color":"Brown","names":[]},{"x":1,"y":-5,"z":1,"color":"Brown","names":[]},{"x":1,"y":-6,"z":1,"color":"Brown","names":[]},{"x":0,"y":2,"z":1,"color":"Red","names":[]},{"x":0,"y":1,"z":1,"color":"Red","names":[]},{"x":0,"y":0,"z":1,"color":"Red","names":[]},{"x":0,"y":-4,"z":1,"color":"Brown","names":[]},{"x":0,"y":-5,"z":1,"color":"Brown","names":[]},{"x":0,"y":-6,"z":1,"color":"Brown","names":[]},{"x":-1,"y":-4,"z":1,"color":"Brown","names":[]},{"x":-1,"y":-5,"z":1,"color":"Brown","names":[]},{"x":-1,"y":-6,"z":1,"color":"Brown","names":[]},{"x":2,"y":2,"z":2,"color":"Red","names":[]},{"x":2,"y":1,"z":2,"color":"Red","names":[]},{"x":2,"y":0,"z":2,"color":"Red","names":[]},{"x":1,"y":2,"z":2,"color":"Red","names":[]},{"x":1,"y":1,"z":2,"color":"Red","names":[]},{"x":1,"y":0,"z":2,"color":"Red","names":[]},{"x":1,"y":-4,"z":2,"color":"Brown","names":[]},{"x":1,"y":-5,"z":2,"color":"Brown","names":[]},{"x":1,"y":-6,"z":2,"color":"Brown","names":[]},{"x":0,"y":2,"z":2,"color":"Red","names":[]},{"x":0,"y":1,"z":2,"color":"Red","names":[]},{"x":0,"y":0,"z":2,"color":"Red","names":[]},{"x":0,"y":-4,"z":2,"color":"Brown","names":[]},{"x":0,"y":-5,"z":2,"color":"Brown","names":[]},{"x":0,"y":-6,"z":2,"color":"Brown","names":[]},{"x":-1,"y":-4,"z":2,"color":"Brown","names":[]},{"x":-1,"y":-5,"z":2,"color":"Brown","names":[]},{"x":-1,"y":-6,"z":2,"color":"Brown","names":[]},{"x":3,"y":1,"z":3,"color":"Green","names":[]},{"x":3,"y":0,"z":3,"color":"Green","names":[]},{"x":2,"y":1,"z":3,"color":"Green","names":[]},{"x":2,"y":0,"z":3,"color":"Green","names":[]},{"x":1,"y":-4,"z":3,"color":"Yellow","names":[]},{"x":1,"y":-5,"z":3,"color":"Yellow","names":[]},{"x":0,"y":-4,"z":3,"color":"Yellow","names":[]},{"x":0,"y":-5,"z":3,"color":"Yellow","names":[]},{"x":3,"y":1,"z":4,"color":"Green","names":[]},{"x":3,"y":0,"z":4,"color":"Green","names":[]},{"x":2,"y":1,"z":4,"color":"Green","names":[]},{"x":2,"y":0,"z":4,"color":"Green","names":[]},{"x":1,"y":-4,"z":4,"color":"Yellow","names":[]},{"x":1,"y":-5,"z":4,"color":"Yellow","names":[]},{"x":0,"y":-4,"z":4,"color":"Yellow","names":[]},{"x":0,"y":-5,"z":4,"color":"Yellow","names":[]},{"x":1,"y":-4,"z":5,"color":"Orange","names":[]}]],
  // double stair case
  [15, [{"x":6,"y":6,"z":0,"color":"Blue","names":[]},{"x":6,"y":2,"z":0,"color":"Blue","names":[]},{"x":6,"y":0,"z":0,"color":"Orange","names":[]},{"x":6,"y":-4,"z":0,"color":"Orange","names":[]},{"x":4,"y":6,"z":0,"color":"Blue","names":[]},{"x":4,"y":2,"z":0,"color":"Blue","names":[]},{"x":4,"y":0,"z":0,"color":"Orange","names":[]},{"x":4,"y":-4,"z":0,"color":"Orange","names":[]},{"x":2,"y":6,"z":0,"color":"Blue","names":[]},{"x":2,"y":2,"z":0,"color":"Blue","names":[]},{"x":2,"y":0,"z":0,"color":"Orange","names":[]},{"x":2,"y":-4,"z":0,"color":"Orange","names":[]},{"x":0,"y":6,"z":0,"color":"Blue","names":[]},{"x":0,"y":2,"z":0,"color":"Blue","names":[]},{"x":0,"y":0,"z":0,"color":"Orange","names":[]},{"x":0,"y":-4,"z":0,"color":"Orange","names":[]},{"x":6,"y":6,"z":1,"color":"Blue","names":[]},{"x":6,"y":2,"z":1,"color":"Blue","names":[]},{"x":6,"y":0,"z":1,"color":"Orange","names":[]},{"x":6,"y":-4,"z":1,"color":"Orange","names":[]},{"x":4,"y":6,"z":1,"color":"Blue","names":[]},{"x":4,"y":2,"z":1,"color":"Blue","names":[]},{"x":4,"y":0,"z":1,"color":"Orange","names":[]},{"x":4,"y":-4,"z":1,"color":"Orange","names":[]},{"x":2,"y":6,"z":1,"color":"Blue","names":[]},{"x":2,"y":2,"z":1,"color":"Blue","names":[]},{"x":2,"y":0,"z":1,"color":"Orange","names":[]},{"x":2,"y":-4,"z":1,"color":"Orange","names":[]},{"x":0,"y":6,"z":1,"color":"Red","names":[]},{"x":0,"y":5,"z":1,"color":"Red","names":[]},{"x":0,"y":4,"z":1,"color":"Red","names":[]},{"x":0,"y":3,"z":1,"color":"Red","names":[]},{"x":0,"y":2,"z":1,"color":"Red","names":[]},{"x":0,"y":0,"z":1,"color":"Red","names":[]},{"x":0,"y":-1,"z":1,"color":"Red","names":[]},{"x":0,"y":-2,"z":1,"color":"Red","names":[]},{"x":0,"y":-3,"z":1,"color":"Red","names":[]},{"x":0,"y":-4,"z":1,"color":"Red","names":[]},{"x":6,"y":6,"z":2,"color":"Blue","names":[]},{"x":6,"y":2,"z":2,"color":"Blue","names":[]},{"x":6,"y":0,"z":2,"color":"Orange","names":[]},{"x":6,"y":-4,"z":2,"color":"Orange","names":[]},{"x":4,"y":6,"z":2,"color":"Blue","names":[]},{"x":4,"y":2,"z":2,"color":"Blue","names":[]},{"x":4,"y":0,"z":2,"color":"Orange","names":[]},{"x":4,"y":-4,"z":2,"color":"Orange","names":[]},{"x":2,"y":6,"z":2,"color":"Red","names":[]},{"x":2,"y":5,"z":2,"color":"Red","names":[]},{"x":2,"y":4,"z":2,"color":"Red","names":[]},{"x":2,"y":3,"z":2,"color":"Red","names":[]},{"x":2,"y":2,"z":2,"color":"Red","names":[]},{"x":2,"y":0,"z":2,"color":"Red","names":[]},{"x":2,"y":-1,"z":2,"color":"Red","names":[]},{"x":2,"y":-2,"z":2,"color":"Red","names":[]},{"x":2,"y":-3,"z":2,"color":"Red","names":[]},{"x":2,"y":-4,"z":2,"color":"Red","names":[]},{"x":6,"y":6,"z":3,"color":"Blue","names":[]},{"x":6,"y":2,"z":3,"color":"Blue","names":[]},{"x":6,"y":0,"z":3,"color":"Orange","names":[]},{"x":6,"y":-4,"z":3,"color":"Orange","names":[]},{"x":4,"y":6,"z":3,"color":"Red","names":[]},{"x":4,"y":5,"z":3,"color":"Red","names":[]},{"x":4,"y":4,"z":3,"color":"Red","names":[]},{"x":4,"y":3,"z":3,"color":"Red","names":[]},{"x":4,"y":2,"z":3,"color":"Red","names":[]},{"x":4,"y":0,"z":3,"color":"Red","names":[]},{"x":4,"y":-1,"z":3,"color":"Red","names":[]},{"x":4,"y":-2,"z":3,"color":"Red","names":[]},{"x":4,"y":-3,"z":3,"color":"Red","names":[]},{"x":4,"y":-4,"z":3,"color":"Red","names":[]},{"x":6,"y":6,"z":4,"color":"Red","names":[]},{"x":6,"y":5,"z":4,"color":"Red","names":[]},{"x":6,"y":4,"z":4,"color":"Red","names":[]},{"x":6,"y":3,"z":4,"color":"Red","names":[]},{"x":6,"y":2,"z":4,"color":"Red","names":[]},{"x":6,"y":0,"z":4,"color":"Red","names":[]},{"x":6,"y":-1,"z":4,"color":"Red","names":[]},{"x":6,"y":-2,"z":4,"color":"Red","names":[]},{"x":6,"y":-3,"z":4,"color":"Red","names":[]},{"x":6,"y":-4,"z":4,"color":"Red","names":[]}]],
  // simple chair
  [15, [{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":0,"z":0,"color":"Brown","names":[]},{"x":0,"y":3,"z":0,"color":"Brown","names":[]},{"x":0,"y":0,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":0,"z":1,"color":"Brown","names":[]},{"x":0,"y":3,"z":1,"color":"Brown","names":[]},{"x":0,"y":0,"z":1,"color":"Brown","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]},{"x":3,"y":0,"z":2,"color":"Brown","names":[]},{"x":0,"y":3,"z":2,"color":"Brown","names":[]},{"x":0,"y":0,"z":2,"color":"Brown","names":[]},{"x":3,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":0,"z":3,"color":"Brown","names":[]},{"x":0,"y":3,"z":3,"color":"Brown","names":[]},{"x":0,"y":0,"z":3,"color":"Brown","names":[]},{"x":3,"y":3,"z":4,"color":"Yellow","names":[]},{"x":3,"y":2,"z":4,"color":"Yellow","names":[]},{"x":3,"y":1,"z":4,"color":"Yellow","names":[]},{"x":3,"y":0,"z":4,"color":"Yellow","names":[]},{"x":2,"y":3,"z":4,"color":"Yellow","names":[]},{"x":2,"y":2,"z":4,"color":"Yellow","names":[]},{"x":2,"y":1,"z":4,"color":"Yellow","names":[]},{"x":2,"y":0,"z":4,"color":"Yellow","names":[]},{"x":1,"y":3,"z":4,"color":"Yellow","names":[]},{"x":1,"y":2,"z":4,"color":"Yellow","names":[]},{"x":1,"y":1,"z":4,"color":"Yellow","names":[]},{"x":1,"y":0,"z":4,"color":"Yellow","names":[]},{"x":0,"y":3,"z":4,"color":"Yellow","names":[]},{"x":0,"y":2,"z":4,"color":"Yellow","names":[]},{"x":0,"y":1,"z":4,"color":"Yellow","names":[]},{"x":0,"y":0,"z":4,"color":"Yellow","names":[]},{"x":3,"y":3,"z":5,"color":"Yellow","names":[]},{"x":3,"y":2,"z":5,"color":"Yellow","names":[]},{"x":3,"y":1,"z":5,"color":"Yellow","names":[]},{"x":3,"y":0,"z":5,"color":"Yellow","names":[]},{"x":3,"y":3,"z":6,"color":"Yellow","names":[]},{"x":3,"y":2,"z":6,"color":"Yellow","names":[]},{"x":3,"y":1,"z":6,"color":"Yellow","names":[]},{"x":3,"y":0,"z":6,"color":"Yellow","names":[]},{"x":3,"y":3,"z":7,"color":"Yellow","names":[]},{"x":3,"y":2,"z":7,"color":"Yellow","names":[]},{"x":3,"y":1,"z":7,"color":"Yellow","names":[]},{"x":3,"y":0,"z":7,"color":"Yellow","names":[]},{"x":3,"y":3,"z":8,"color":"Yellow","names":[]},{"x":3,"y":2,"z":8,"color":"Yellow","names":[]},{"x":3,"y":1,"z":8,"color":"Yellow","names":[]},{"x":3,"y":0,"z":8,"color":"Yellow","names":[]}]],
  // new tree
  [15, [{"x":0,"y":0,"z":0,"color":"Brown","names":[]},{"x":0,"y":0,"z":1,"color":"Brown","names":[]},{"x":0,"y":0,"z":2,"color":"Brown","names":[]},{"x":0,"y":4,"z":3,"color":"Green","names":[]},{"x":0,"y":3,"z":3,"color":"Green","names":[]},{"x":0,"y":2,"z":3,"color":"Green","names":[]},{"x":0,"y":1,"z":3,"color":"Green","names":[]},{"x":0,"y":0,"z":3,"color":"Brown","names":[]},{"x":0,"y":-1,"z":3,"color":"Green","names":[]},{"x":0,"y":-2,"z":3,"color":"Green","names":[]},{"x":0,"y":-3,"z":3,"color":"Green","names":[]},{"x":0,"y":-4,"z":3,"color":"Green","names":[]},{"x":0,"y":5,"z":4,"color":"Green","names":[]},{"x":0,"y":4,"z":4,"color":"Green","names":[]},{"x":0,"y":3,"z":4,"color":"Green","names":[]},{"x":0,"y":2,"z":4,"color":"Green","names":[]},{"x":0,"y":1,"z":4,"color":"Green","names":[]},{"x":0,"y":0,"z":4,"color":"Brown","names":[]},{"x":0,"y":-1,"z":4,"color":"Green","names":[]},{"x":0,"y":-2,"z":4,"color":"Green","names":[]},{"x":0,"y":-3,"z":4,"color":"Green","names":[]},{"x":0,"y":-4,"z":4,"color":"Green","names":[]},{"x":0,"y":-5,"z":4,"color":"Green","names":[]},{"x":0,"y":4,"z":5,"color":"Green","names":[]},{"x":0,"y":3,"z":5,"color":"Green","names":[]},{"x":0,"y":2,"z":5,"color":"Green","names":[]},{"x":0,"y":1,"z":5,"color":"Green","names":[]},{"x":0,"y":0,"z":5,"color":"Brown","names":[]},{"x":0,"y":-1,"z":5,"color":"Green","names":[]},{"x":0,"y":-2,"z":5,"color":"Green","names":[]},{"x":0,"y":-3,"z":5,"color":"Green","names":[]},{"x":0,"y":-4,"z":5,"color":"Green","names":[]},{"x":0,"y":3,"z":6,"color":"Green","names":[]},{"x":0,"y":2,"z":6,"color":"Green","names":[]},{"x":0,"y":1,"z":6,"color":"Green","names":[]},{"x":0,"y":0,"z":6,"color":"Brown","names":[]},{"x":0,"y":-1,"z":6,"color":"Green","names":[]},{"x":0,"y":-2,"z":6,"color":"Green","names":[]},{"x":0,"y":-3,"z":6,"color":"Green","names":[]},{"x":0,"y":2,"z":7,"color":"Green","names":[]},{"x":0,"y":1,"z":7,"color":"Green","names":[]},{"x":0,"y":0,"z":7,"color":"Brown","names":[]},{"x":0,"y":-1,"z":7,"color":"Green","names":[]},{"x":0,"y":-2,"z":7,"color":"Green","names":[]},{"x":0,"y":2,"z":8,"color":"Green","names":[]},{"x":0,"y":1,"z":8,"color":"Green","names":[]},{"x":0,"y":0,"z":8,"color":"Brown","names":[]},{"x":0,"y":-1,"z":8,"color":"Green","names":[]},{"x":0,"y":-2,"z":8,"color":"Green","names":[]},{"x":0,"y":1,"z":9,"color":"Green","names":[]},{"x":0,"y":0,"z":9,"color":"Brown","names":[]},{"x":0,"y":-1,"z":9,"color":"Green","names":[]}]],
  [15, [{"x":0,"y":0,"z":0,"color":"Brown","names":[]}]]
]

export default targets
