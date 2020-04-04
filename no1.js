function biodata(name, age) {
  myObj = {
    "name": name,
    "age": age,
    "address": "Bambang Timur RT01 RW01 Desa Siraman Kec.Kesamben Kab.Blitar",
    "hobbies ": "Basket",
    "is_married": false,
    "list_school": [{
        "name": "SDN Siraman 04",
        "year_in": 2008,
        "year_out": 2014
      },
      {
        "name": "SMPN 1 Kesamben",
        "year_in": 2014,
        "year_out": 2017
      },
      {
        "name": "SMK PGRI Wlingi",
        "year_in": 2017,
        "year_out": 2020
      },
    ],
    "skills": [{
        "skill_name": "HTML",
        "level": "advanced"
      },
      {
        "skill_name": "CSS",
        "level": "advanced"
      },
      {
        "skill_name": "Bootstrap",
        "level": "beginner"
      },
      {
        "skill_name": "JS",
        "level": "beginner"
      },
      {
        "skill_name": "PHP",
        "level": "beginner"
      },
      {
        "skill_name": "MySQL",
        "level": "beginner"
      },
      {
        "skill_name": "Java",
        "level": "beginner"
      },
      {
        "skill_name": "Codeigniter",
        "level": "beginner"
      }
    ],
    "interest_in_coding": true
  }

  return myObj;
}

console.log(biodata("Yuda Rohmadani", 18));