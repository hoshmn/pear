const db = require('APP/db')

const seedUsers = () => db.Promise.map([
    { name: 'so many', email: 'god@example.com', password: '1234' },
    { name: 'Barack Obama', email: 'barack@example.gov', password: '1234' },
], user => db.model('users').create(user))

let id = 1
const ids = []

// console.log(db)

const seedIndividuals = () => db.Promise.map([
    { name: 'Josh' },
    { name: 'Gil' },
    { name: 'Aditya' },
    { name: 'Rose' },
    { name: 'Simon' }
], indiv => {
    ids.push(id++)
    return db.model('individuals').create(indiv)
})

const randomPreference = () => Math.floor(Math.random() * 21) - 10

const seedPreferences = () => db.Promise.map(ids, indivId =>
    ids.filter(partId => indivId != partId)
    .map(partId => {
        const pref = randomPreference()
        return db.model('individualPartners').create({
            individual_id: indivId,
            partner_id: partId,
            preference: pref
        })
    })
)

const seedGroups = () => db.Promise.map([
    { name: 'FS1607' }, { name: 'FS1610' }, { name: 'instructors' }
], group => db.model('groups').create(group))

const seedGroupMembers = groups => db.Promise.map(ids, id =>
    db.model('individuals').findById(id)
    .then(indiv => db.Promise.map(groups, group => {
      if (group.id === 2 && Math.random()>.5) return;
      if (group.id === 3 && Math.random()>.3) return;
      else return group.addIndividual(indiv)
    }))
)

// db.Promise.map(ids, group => 
//     ids.map(id => db.model('individuals').findById(id)
//         .then(indiv => {
//           console.log('!!!!',indiv.name)
//           group.addIndividual(indiv)
//       })
//     )
//   )

db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedUsers)
    .then(users => console.log(`Seeded ${users.length} users OK`))
    .then(seedIndividuals)
    .then(individuals => console.log(`Seeded ${individuals.length} individuals OK`))
    .then(seedPreferences)
    .then(individualPrefs => console.log(`Seeded ${individualPrefs.length} individualPrefs OK`))
    .then(seedGroups)
    .then(groups => {
        console.log(`Seeded ${groups.length} groups OK`)
        return groups
    })
    .then(seedGroupMembers)
    .then(groupMembers => console.log(`Seeded ${groupMembers.reduce((tot,curr)=>tot+curr.filter(truthy=>!!truthy).length,0)} groupMembers`))
    .catch(error => console.error(error))
    .finally(() => db.close())
