import React, { useState, useEffect, useMemo } from "react";
import {
  Check,
  X,
  BookOpen,
  ArrowLeft,
  Trophy,
  Download,
  RotateCcw,
} from "lucide-react";

// --- DATA ---
// The raw text provided by the user is embedded here.
const RAW_VOCAB_DATA = `GRADE 3

SCIENCE & TECHNOLOGY
aerobics
alteration
atmosphere
attract
bacteria
balance
base
buckle
bulbs
cause
cement
charge
citizenship
clay
climate
collapse
components
composition
compost
compress
construct
controlled
dam
decay
deplete
destroy
develop
distance
drainage
drought
earthquake
earthworm
effect
electrostatic
endangered
endure
erosion
examine
exert
fertilizer
fine-grained
flexibility
flexible
flood
forces
form
gravitational forces
gravity
greenhouse gas
gritty
habitat
herbs
heritage
illustrate
ingest
ingredients
landslides
load
load-bearing
magnetic forces
magnetism
manure
mend
microscope
minerals
mosses
motion
native
nourishment
nutrients
organic
organic matter
pebbles
phenomena
pollen
predict
prevent
primary
region
regions
reliable
repair
resistance
rural
scatter
seedlings
settlements
settlers
shrubs
signal
slick
speed
stability
static
stem
strength
strut
sufficient
support
techniques
tension
threaten
tides
traditional
triangulation
urban
utilities
vehicle
wetlands
wildlife
withstand

MATHEMATICS
additional
algorithm
analog
analyze
arrange
arrays
assemble
attribute
automate
average
calculations
capacity
challenge
clockwise
colon
column
combinations
compare
compute
construct
context
counterclockwise
cubes
curved shapes
cylinders
data set
debug
denominator
diagonal
diagram
digital clocks
distributed
division
either
elements
equally likely
equivalency
equivalent
execute
expanded
faces
fifths
formula
fractional amount
fractions
frequency tables
full turn
gaps
generalize
half-turn
halving
inverse relationship
iteration
kilometers
likely
line
loops
mass
mean
midpoint
millimeters
multiply
nearest
notation
object
opposite
overlaps
partial
partial number
partitioned
perimeter
physical
placeholder
polygon
pseudocode
pyramids
qualitative
quantitative
ratios
relative
repetitive
rounding
row
scales
similar
skewed
timers
trade
unlikely
variability
weight

LANGUAGE
aboriginal
action verb
adverbs
advice
agreeable
alternative
antonym
argue
assist
careless
chapter book
character traits
classification
climate
comic books
comparatives
comparison
conference
construct
contrast
contribute
conversation
convey
credit
culture
cursive
defend
describe
detail
dialogue
diaries
differences
direct speech
disappointed
electronic reference sources
emphasize
example
experience
fables
figuratively
first-person
furious
gathered
gist
glossary
hyperlinks
implied message
infer
inference
influence
intonation
invitation
irritate
literally
logos
magazine articles
main elements
margins
multimedia
nervous
occur
oral
outline
overheads
overt message
pamphlet
paraphrase
passage
patient
peer
personal recount
perspective
persuade
pleasant
plot development
prank
prefix
pronunciation
proofread
purpose
recognize
repetition
report
resources
revise
rhythm
ridiculous
shiver
similarities
sketch
slumber
solution
sources
spacing
speech bubbles
storyboard
stumble
style
subheadings
suffix
syllable
synonym
tables
tape-recording
thesaurus
unite
unusual
valuable
volunteer

GRADE 4

SCIENCE & TECHNOLOGY
acid rain
adapt/adaptation
adaptations
agriculture
alternative
aluminum
amplification
annual
artificial
auditory
automatic
availability
beam
carnivores
cause
classify
climate change
community
compact
concrete
conserve
consolidate
consumer
contribute
decomposer
deforestation
demonstrate
dependence
depletion
deposit
direction
disease
disorient
divert
Earth's crust
echo
effect/effective
effort
electrical energy
encourage
equal
equitable
erupt
evidence
examine
expansion
experiment
extinction
extract
facilitate
feature
firm
flexible
food chains
force
fuel
gear
generation
geology
gravel
green spaces
harvest
herbivores
hunting
ignite
independence
initial
innovation
instrument
intensity
interdependent
invasive species
kaleidoscope
landscape
linear
loudness
lower
lustre
machine
mechanical advantage
medium
microphone
minerals
mining
modification
motion
natural
natural gas
obscure
observe
omnivores
operate
optical
origin
oscillating
particular
path
pedal
penetrate
periscope
persist
pitch
plane
population
prism
producer
pulley
purify
raise
rapid
rear
recycle
refine
refineries
reflect
replenish
result
reuse
samples
scarce
secure
separate
shiny
smog
solidify
speed
streak
structural
surface
technology
telescope
temporary
terrarium
texture
threat/threatening
timber
topsoil
tourism
transfer
transmit
transparency
trapping
travel
urban development
vibrations
visible
volume
white light

MATHEMATICS
accurate
adjacent
asterisk
border
broad
calculate
circular
clusters
compare
complexity
consumer
coordinate
decrease
denote
difference
distance
distribute
doubles
elapsed time
entire
equally likely
estimate
factors
frequent/frequently
goods
grams
guess-and-check
increasing
infographic
kilograms
likely
litres
manipulate
maximum
median
metric system
milliliters
minimum
operator
origin
overestimate
payment
perpendicular
plot
prefix
product
quadrants
range of values
rate
rays
reflections
right angles
save
separate
services
simplify
surround
symbol/symbolic
symbols
symmetrical
underestimate
unlikely
vendor
verify
volume
x-axis
y-axis

LANGUAGE
accomplish
acknowledge
alternative
announcement
approach
argue
avoid
awkward
broad
cause
challenge
cite
clarify
comment
comprehension
conclude
confirm
contrast
convince
critical
defend
describe/description
detail
develop
disappointed
eliminate
essential
establish
evidence
example
except
exclaim
explanation
fluent
formal
formulate
fortunate
framework
furious
generalization
highlight
impression
improvement
infer/inference
inform
informal
insert
justify
narrow
obstacle
obvious
organized
pace
passage
persuade
predict/prediction
prefer
previous
pronounce
publish
purpose
rarely
realistic
reason
recognize
recommend
represent
reveal
selection
significant
subject
suggestions
summarize
support
timeline
tradition
typical
usually

GRADE 5

SCIENCE & TECHNOLOGY
aerodynamic
appliances
associated
body temperature
chemical
chemical change
circulation
circulatory system
composition
consequences
contained
critical
damage
definite
digestion
digestive system
edible
efficient
exchange
exertion
exhaust
external force
fusion
gas
heart rate
indicators
insulation
investigate
irreversible
kinetic
large intestine
matter
mechanical
mechanical energy
musculoskeletal system
natural phenomena
nervous system
non-renewable
nutrition
organs
over exposure
physical change
precipitate
preservation
quantitative
recharge
respiratory system
saliva
simulations
small intestine
solar energy
thermometer
tides
torque
tsunamis
vessels
volume
wattage
wind energy

MATHEMATICS
approximate
approximation
compass
conditional
conversions
credit
debt
define
dimensions
equivalent
evaluate
front view
greater than
horizontal
interval
less than
loan
merge
money transfer
percents
rotations
sample
spatially
square
statement
subset
sum
top view
trial
vertical
visual model

LANGUAGE
abolish
accomplish
accurate
affirm
announce
anxious
appeal
approach
approval
argument
avoid
bilingual
briskly
cease
character development
commentary
conclude
conclusion
conflict
consistent
context
convince
coverage
culture
decade
dissatisfied
dominate
dramatization
drowsy
editorials
effortless
escalate
establish
evaluate
evocative image
exaggerated claim
expansion
expectation
explain
express
extend
familiar
film
finality
formal tone
frequent
gigantic
glare
globe
harsh
heroic
hesitate
hilarious
historic
historical figure
hostile
huddle
humorous
identify
illegible
imagery
immigration
influence
informal tone
introduction
justify
lead actor
legend
logical organization
metaphor
mood
navigate
negative review
novel
one-sided argument
opposed
ordinary
palindrome
passage
personification
persuade
positive review
primary
promt
pun
recently
reference
relate
reliable
review
revolt
run-on sentence
scarce
sensitivity
significant
source
studio audience
summarize
superior
talk show
tension
tolerate
tremble
unexpected
unfamiliar

GRADE 6

SCIENCE & TECHNOLOGY
accumulate
adapt
adverse
asteroids
astronauts
aviation
biodiversity
circuit
classification
comets
conductor
contribution
convenient
convention
convert
crops
current
cycle
demand
diversity
drag
eclipse
ecosystems
electrical energy
exhaust
flap
force of gravity
glide
globe
hover
humid
hydroelectricity
hypothesis
indigenous
infections
injured
invertebrate
invasive
irrigate
life-support systems
lunar
membrane
micro-organisms
moons
motion
navigation
operator
organisms
outlet
overhead
parachute
peak
pests
phase
planets
poisonous
position
precise
pressure
primates
projectile
propel
propose
relay
resilient
revolution
robot
roles
rotation
rub
satellite
series circuit
shuttle
simple circuit
solar system
spacecraft
spectator
spectroscopes
spine
static electricity
station
steered
substantial
sundial
supplements
telescope
territory
thermal
thrust
tilt
transform
turbine
upward
ventilate
vertebrate
voltage
wire

MATHEMATICS
accuracy
algebraic equation
alter
bell curve
brackets
calculate
comparison
congruent
continuous
contrast
coordinate
dart
database
dimension
equation
factor
finite
flow chart
frequent/frequency
gap
infinite
interest rate
million
range
simulation
sub-category
surface area
variable

LANGUAGE
achieve
adapt
adequate
adjacent
analyze
anticipate
appropriate
artifact
autobiography
benefit
brackets
catastrophe
chronological
citizen
civilization
colon
compelling
complex
compose
conclusion
consequence
construct
contemporary
contrast
contribute
convince
declare
democracy
drastic
effective
elaborate
encourage
enhance
evaluate
exaggerate
expression
extend
extensive
fantasies
ferocious
flowchart
formality
genuine
government
historical
history
imaginary
inclusive
insists
language
legible
lofty
manipulate
massive
mock
monologue
narrate
non-discriminatory language
obedient
oblivious
origin
peculiar
persuade
persuasive
prediction
priority
quote
realistic
recount
refine
reinforce
repetition
retrieve
similar
solution
strategy
substitute
suspense
tentative
thesis
transfer
unanimous
unique
viewpoint
violate
vivid

GRADE 7

SCIENCE & TECHNOLOGY
aesthetic
asphalt
biotic
cause
center of gravity
chambers
colonies
component
congestion
decomposition
dilute
distillation
emit
engineer
extraordinary
faulty
filtration
fungi
geothermal
global warming
homogenous
incorporate
incorporation
infestation
insoluble
intervention
light beam
meteorological
postulate
pure substances
radiation
sensor
shear
sifting
solutions
submerge
sustainability
symbiotic
symmetry
theory
toxic
universal

MATHEMATICS
constant rate
cross-section
cubic centimeters
cylinder
data distribution
derivative
diameter
dilation
distort
e-transfer
estimate
exchange rates
illustrations
incline
initial value
operator
optimize
outliers
radius
replacement
reposition
sector
simplify
sub-program
superscript

ENGLISH
abbreviation
abdicate
abrasive
abruptly
acknowledge
acquire
addict
adequate
admonish
affiliation
agitate
allege
allocate
alternative
amendment
analogy
antagonize
appeal
assert
attribute
authentic
bamboozle
belligerent
bewilder / bewildered
bias
boycott
candor
casualty
characterize
chronological
clarification
compel
competent
conclusive
concur
condemn
confront
connotation
consecutive
consult
contrast
copious
correspond
credibility
dawdle
deceitful
demeanor
depict
derogatory
devastate
devious
devour
diversity
dominant
dramatic
eligible
emphasize
enumeration
evaluate
exonerated
exposition
exuberant
famished
features
flashback
formidable
genre
harass
hyperlink
ideological
imaginative
impartial
indifferent
industrious
inevitable
infuriate
inhabitants
initiate
interrelationship
intimidate
irate
irrelevant
legendary
liaison
libel
ludicrous
mandatory
mitigate
monologue
naïve
narrate
narrative
nationality
necessity
negligent
obnoxious
omission
omit
opposition
oppress
parentheses
perceive
perspective
persuasive
phrase
position
prediction
prominent
prospective
punctual
quote
reinforce
relinquish
resolve
retrieve
rudimentary
sarcasm
secession
selectively
sensory
signify
sovereign
statement
straightforward
subgroup
substitute
suspense
talisman
task bar
tentative
tragedy
treason
understatement
viewpoint
works cited

GRADE 8

SCIENCE & TECHNOLOGY
Aboriginal clan systems
accomplish
aeronautical
automation
basis
cause
cell membrane
chromosome
coast
contaminant
cross-breed
density
deoxyribonucleic acid
diagnose
diameter
diffusion
discern
evident
fluids
focus
forecast
fragile
fresh water
genes
glaciers
illumination
implication
indicator
infuse
international
irrigation
load arm
lubrication
manipulate
mortality
multicellular
municipality
national
nucleus
optical systems
optimize
parallel
polar ice-cap
productivity
ratio
redirect
remediation
stage
syringe
tissues
water quality
wheelbarrow

MATHEMATICS
annual fees
bisect
conclusions
deposit
enlarge
expenses
formula
incentive
income
legs
linear growth
magnitude
mega
micro
nano
non-linear growth
precede
rise
sensor
simultaneous
spreadsheets
temperature
troubleshoot
variable

LANGUAGE
accurate
aloof
alternative
ambiguity
anecdote
apathy
arbitrary
assert
assume
asylum
audacious
audience
authority
ban
belligerent
boycott
breadth
browse
cajole
capable
censure
characterize
chronological
clause
commence
compel
competent / competently
conclude
consistency
controversial
conventions
credible
debacle
deceptive
denote
dictionary
diligent
distinction
environmental issue
essay
establish / established
evidence
export
exposition
fabricate
feasible
gimmick
global issue
headline
illuminate
imagery
initial
integrate
interpretation
intonation
lecture
legislation
limerick
memoirs
merge
mitigate
narrate
nebulous
novice
obsolete
opposition
passive voice
perceive
perception
perish
perspective
persuasive
pertinent
plagiarize
precedence
precise
prediction
prevalent
procedure
promotion
quote
rebellious
relevant
reporter
resolve
response
science
science fiction
significant
similar
social issue
sophisticated
source
specific
speech
spreadsheet
stage production
subsequent
subservient
sufficient
surreptitious
suspense
target
technical terms
technicality
testimony
theory
universal
validate
varied
verify
verse
viewpoint
vigorous
vindicate
vulnerable
website
wince
zealous
zenith

GRADE 9

SCIENCE
analyze
aquatic
arrangement
astronomical
atoms
bias
big bang
biology
biosphere
boiling point
brittle
calculate
chemistry
combustibility
communicate
compounds
discharge
dynamic
ecology
electrician
electrons
equilibrium
extrapolate
federal
formulate
fuse
galaxies
generate
geophysicist
hypothesis
induction
interpret
laboratory
lenses
light years
magnify
melting point
Milky Way
molecular structure
molecule
numeric
organization
overfishing
overhunting
perform
periodic table
photosynthesis
physics
precise
provincial
reaction
refutation
reliability
restoration
scientific theory
shoreline
simulate
species diversity
stewardship
suburban
switch
terrestrial
texture
trampled
uncertainty
undisturbed
universe
versatile
viable
volts

MATHEMATICS
abstract reasoning
appreciation
approximate
assumption
characteristic
constraint
data management
density
dependent variable
depreciation
dispersion
enclose
expand
fluctuate
geometry
graphing calculator
independent variable
inference
informal process
limit
parameter
slope
sphere
survey
trends
trial and error

ENGLISH
abrupt
absolve
adopt
alleviate
allusion
alternative
ambivalent
analyze
animosity
antagonist
arbitrary
assonance
attribute
authority
beneficial
bibliography
central argument
characterization
coherent
comparison
comprehensive
concrete
connotation
contrast
credible
cursory
cynic
dateline
dearth
deficient
demonstrate
depict
derive
detract
devastate
digress
dilemma
diligent
dissent
distort
diversion
elation
elicit
escalate
evaluate
evocation
exacerbate
excerpt
exemplify
exhibit
explicit
exposition
extensive
falter
feasible
feign
flashback
foreshadow
gist
hook
hypothetical
impartial
implausible
implication
imply
impression
incentive
incoherent
indolent
infamous
infuriate
innovation
intensive
intercede
interpret
interpretation
intimidate
isolate
jeopardize
lucrative
mandatory
mediate
mortify
niche
obscure
obsolete
pacify
perception
perseverance
perspective
persuasive language
pertinent
point-form
ponder
prevalent
proponent
protagonist
punctuation
punitive
rapport
rationale
receptive
reconcile
redraft
redundant
resolution
respective
retaliate
sabotage
scrutiny
similar
spatial awareness
specialized vocabulary
squander
subject matter
succumb
symbolic
symbolism
tangible
technique
theme
traumatic
turmoil
unpredictability
valid
verify
vulnerable

GRADE 10

SCIENCE
abnormality
base
biomass
cancer
carbohydrates
cloning
compile
concave
converge
convex
corrosion
cyanide
cyclones
degrade
dendrites
deoxyribonucleic acid
differentiation
discrepancies
dissection
diverging
ethics
fetus
focal point
genetic disorder
geometric
greenhouse effect
hierarchical organization
illusion
illustrator
infrared
manipulate
medical
meteorologist
neutral
qualitative
quantitative
red blood cells
static
surgery
ultrasound
ultraviolet
vaccine
veins
x-ray

MATHEMATICS
algebraic
altitude
congruence
development
endpoint
factoring
midpoint
parabola
representivity
shadows
similarity

ENGLISH
abstract
academic language
admonish
advocate
alternative
ambiguous
analogy
anarchy
antecedent
assiduous
assimilate
attentiveness
augment
authentic
belligerent
bolster
bureaucratic
circumvent
coalition
cohesive
coincidence
collaborate
compile
comply
concise
concurrent
connotation
constituent
contingent
criteria
database
deliberate
demeanor
deplore
derogatory
differentiate
disparity
disseminate
dissident
distraught
divert
dormant
egocentric
elusive
emulate
equitable
eradicate
estrange
euphemism
exacerbate
expedite
fabricate
facilitate
fortuitous
fraudulent
heinous
hesitation
hypothetical
illicit
imminent
impetuous
incongruous
indigenous
indiscriminate
inherent
jurisdiction
lax
mainstream
memorable
meticulous
narrative inversion
negligent
nonchalant
objectivity
oblivious
obscure
omnipotent
opportune
oppose
oxymoron
panacea
perfunctory
podcast
portfolio
possession
precarious
precipitate
preclude
preposterous
proficient
propaganda
propensity
prose
pun
rationale
recalcitrant
redeem
redundant
refrain
rejuvenate
relegate
relinquish
repugnant
research
resilient
resonate
retrospect
sanction
semicolon
slang words
sonnet
spontaneous
stringent
subordinate
subsidize
technical terminology
tenuous
tragedy
travesty
tumult
unilateral
validate
vindicate
voice-over
zealot

GRADE 11

SCIENCE - BIOLOGY
algae
analogous
anatomy
antibiotic resistance
artificial insemination
biotechnology
botanist
carcinogen
cardiac arrest
cellular biology
chemical digestion
class
colon
competition
constipation
coronary
diabetes
distribution
divergent
evolution
evolve
exhalation
family
flourish
generation
hybrid
inhalation
inherit
kidney
liver
livestock
mimicry
mutation
order
physiology
protein
retention
stimuli
suppress
variability
viable

SCIENCE - CHEMISTRY
atmosphere
dissociation

SCIENCE - ENVIRONMENTAL SCIENCE
accelerated
antibiotics
carbon neutral
causality
conservationist
contaminants
contemporary
efficiency
evidence
exotic
export
fiberglass
filter
forest canopies
forest fire
forestry
harvest
impairments
import
inference
lumber
moisture
objectivity
paradigm
programmable
recover
succession
theory
thermostat
vulnerable

SCIENCE - PHYSICS
acceleration
amplitude
average
constant
derive
displacement
dissipate
induction
phase
position
range
reception
spring

MATH - FOUNDATIONS
bank statement
benefit plans
break-even point
categorical
charitable donations
cheques
commission
compound
convenience
credit card statement
currency
data management
deferred-payment loan
demerit points
depreciation
distribution
drug absorption
exponential growth
fixed interest rate
gratuities
gross pay
GST
insurance
line of credit
loyalty rewards
mathematical model
miscellaneous expenses
net pay
payroll deductions
pension plans
per annum
personal finance
profit-sharing
PST
quarterly
salary
semi-annually
statistics
taxation
total earnings
vacation pay
voluntary

MATH - FUNCTIONS & APPLICATIONS
inspect
period
profit

ENGLISH
aberration
abstract
academic honesty
accolade
accommodate
active voice
aesthetic
affinity
altercation
ambiguous
ameliorate
amicable
anarchy
annotate
anomaly
appall
archaic
archetypal
arduous
articulate
astute
audiobook
authentic
authenticity
authoritarian
authoritative tone
aversion
biased
brevity
cajole
callous
capitulate
catalyst
catharsis
caustic
censure
central idea
chastise
clamor
coalesce
cognizant
commiserate
compilation
composure
conciliatory
constructive
contract
contradictory
coordination
copious
copyright
cordial
crisis
criticism
critique
dearth
debilitate
decadence
defamatory
deference
deliberate
delineate
deprecate
despot
devious
didactic
directories
disparage
dissonance
drawback
duplicity
ediface
effervescent
egregious
elusive
endorsement
equivocal
erroneous
excerpt
exemplary
expedient
extended
extraneous
formidable
frivolous
grueling
guidance
haphazard
heretic
hindrance
hypocrisy
iconoclast
imagery
impartiality
incessant
incidental
incite
incorrigible
indict
indoctrinate
infomercial
insurgetn'
intangible
intention
judicious
lavish
lecture
listless
meager
meander
media conglomerates
monotony
moral value
narrative
negligent
obliterate
obscure
ominous
opinion piece
parody
passage
passive voice
perpetuate
plagiarism
politician
ponderous
preclude
prejudice
prerequisite
proficient
proximity
public forum
publicize
readability
rectify
rehearse
rescind
resolution
rigorous
scrutinize
seminar
sitcom
social inequalities
social injustice
sophisticated
spiritual care
subordination
substantiate
surmise
testimony
theatrical release
tirade
transition
turbulence
typography
under-represented
unimpeachable
unobtrusive
usurp
whimsical

ENGLISH: CANADIAN LITERATURE
aboriginal cultural background
amplify
aspect
critical review
cultural context
economic
feminism
foreground
historian
historical context
immigrant
inequity
journal entry
motifs
political context
political development
provoke
regional context
regional issues
seminar
social background
social change
social inequality
synopsis
unconventional perspective

ENGLISH: MEDIA STUDIES
advertising campaigns
alternative periodicals
amateur
animated
audience
audience screening
blog
cinematography
commentary
conflict
cultural identity
demographic
demographics
digital distribution
digital photography
documentaries
domestic source
economic
emotional appeal
ethical
ethical judgment
euphemism
exaggeration
formulaic
formulaic plot resolution
fragmentation
glamorization
groups
implication
individualized
infringement
logo
media coverage
media platform
merited
method
negotiate
overt message
podcast
producers
proliferation
promotion
record company
showcase
societal norms
stated message
studio
suspense
symbol
target audience
transmit
video documentaries

ENGLISH: PRESENTATION & SPEAKING SKILLS
assumption
attention span
compensate
consequences
counter-productive
customize
debate
expectation
eye contact
floor plan
implication
interview
logical fallacies
memorization
pace
posture
relaxation
repetition
report
volume

GRADE 12

SCIENCE - BIOLOGY
activation
deletion
hormones
inhibition
insertion
tolerance
transcription
translation

SCIENCE - CHEMISTRY
buffer
reduction
shell
spontaneity
thermometer

SCIENCE - EARTH AND SPACE SCIENCE
altitude
asteroid belt
astronomy
black holes
carbon dating
evaporate
fracture
frequency
geological
half-life
irregular
mould
period
preservation
replacement
robotics
speculative
spiral
streak
underpinnings

SCIENCE - GENERAL
adopt
airborne
biofeedback
body temperature
fats
hygiene
public health
replication
route of entry
scaffolding
serving size
strain
theoretical

SCIENCE - PHYSICS
dynamics
elapsed time
impulse
laser
momentum
relativity

MATH - CALCULUS AND VECTORS
differentiate
force
projection
proof

MATH - DATA MANAGEMENT
compile
complementary
satisfaction
simulate
uncertainties
variance

MATH - FUNCTIONS
acceleration

MATH - GENERAL
accommodation
depth
puncture
utilities

ENGLISH
abbreviate
abdicate
abstinence
adulation
adversity
advocate
aesthetic
allusion
amicable
anachronistic
anecdote
anonymous
antagonist
archetype
arid
assiduous
asylum
attire
beliefs
benevolent
camaraderie
catchphrase
censure
clairvoyant
coincide
collaborate
compassion
compromise
condescending
conditional
confer
conformist
congregation
consensus
convergence
deconstruct
deliberations
demagogue
digression
diligent
discredit
discrepancy
disdain
dissent
divergent
divergent thinking
ellipses
empathy
emulate
enervating
enhance
ephemeral
evanescent
exemplary
extenuating
florid
fortuitous
frugal
gender bias
hackneyed
haughty
hedonist
hypothesis
illuminate
impersonate
impetuous
impute
incompatible
inconsequential
inevitable
inquiry
integrity
intrepid
intuitive
jubilation
justify
lobbyist
longevity
motivational speech
mundane
nonchalant
novice
nuance
opulent
orator
ostentatious
parched
perfidious
precocious
preconception
pretentious
procrastinate
prosaic
prosperity
provocative
prudent
querulous
rancorous
reclusive
reconciliation
recur
refute
renovation
research paper
resilient
restrained
reverence
sagacity
scrutinize
spontaneity
spurious
submissive
substantiate
subtext
subtle
superficial
superfluous
suppress
surreptitious
syntax
tactful
tenacious
transient
transparent
venerable
vindicate
wary

ENGLISH - BUSINESS & TECHNOLOGICAL COMMUNICATION
animation
application
apprenticeship
boldface
business
business letter
business presentation
cellular technology
conference
consumers
core message
corporate
document
draft
ecological footprint
employment
entrepreneur
ethical issue
etiquette
expertise
informative
inspirational
instructional manual
instructional video
insurance
investment
legal issue
legislation
manager
patent infringement
pictograms
policy
questionnaire
representative
retailer
sales pitch
self-assessment
shareholders
succinct
survey
technician
technological communications
workplace

ENGLISH - STUDIES IN LITERATURE
annotate
attitude
attributable
author’s position
background
controversy
critic
cultures
enact
exemplify
marginalized characters
marginalized voices
minor importance
moral dilemma
persona
problematic
prologue
recurrent theme
revelation
scrapbook
sexual identity
short excerpt
social class
social convention
subconscious motivation
supernatural
time period
validity

ENGLISH - WRITER’S CRAFT
active voice
amateur writer
assessment
censorship
coherent
cohesive
contemporary writer
creative writing
cultural perspective
demean
freelance journalist
grammatical error
humorous tone
journalism
journalist
manuscript
memoir
negotiate
novelist
opening monologue
passive voice
portfolio
professional writer
qualification
revision
script
technical writing
vignette`;

// --- HELPER FUNCTION TO PARSE TEXT ---
function parseVocabulary(text) {
  const lines = text.split("\n").map((l) => l.trim());
  const words = [];
  let currentGrade = "Unknown Grade";
  let currentDomain = "Unknown Domain";

  for (const line of lines) {
    if (!line) continue;

    if (line === "KINDERGARTEN" || line.startsWith("GRADE ")) {
      currentGrade = line;
    }
    // Domains are usually all caps (and longer than 1 char to avoid issues)
    else if (line === line.toUpperCase() && line.match(/[A-Z]/)) {
      currentDomain = line;
    }
    // Otherwise it's a vocabulary word
    else {
      words.push({
        grade: currentGrade,
        domain: currentDomain,
        word: line,
      });
    }
  }
  return words;
}

// --- MAIN APP COMPONENT ---
export default function App() {
  const [vocabList, setVocabList] = useState([]);

  // Initialize currentIndex from localStorage
  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const saved = localStorage.getItem("vocabMaster_currentIndex");
      return saved !== null ? parseInt(saved, 10) : 0;
    } catch (e) {
      console.error("Failed to read progress from cache", e);
      return 0;
    }
  });

  // Initialize unknownWords from localStorage
  const [unknownWords, setUnknownWords] = useState(() => {
    try {
      const saved = localStorage.getItem("vocabMaster_unknownWords");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to read unknown words from cache", e);
    }
    return [];
  });

  const [lastAction, setLastAction] = useState(null);
  const [view, setView] = useState("flashcard");

  // Swipe gesture states
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [exitDirection, setExitDirection] = useState(null); // 'left' or 'right'

  // Parse data on initial load
  useEffect(() => {
    const parsed = parseVocabulary(RAW_VOCAB_DATA);
    setVocabList(parsed);

    // Check if we resumed into a finished state based on cached progress
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= parsed.length && parsed.length > 0) {
        setView("finished");
        return parsed.length;
      }
      return prevIndex;
    });
  }, []);

  // Sync currentIndex to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("vocabMaster_currentIndex", currentIndex.toString());
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  }, [currentIndex]);

  // Sync unknownWords to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        "vocabMaster_unknownWords",
        JSON.stringify(unknownWords)
      );
    } catch (error) {
      console.error("Failed to save study words", error);
    }
  }, [unknownWords]);

  const currentItem = vocabList[currentIndex];
  const totalWords = vocabList.length;

  const handleSwipeOut = (direction) => {
    if (exitDirection) return; // Prevent double trigger
    setExitDirection(direction);

    // Wait for the exit animation to finish before updating logic
    setTimeout(() => {
      if (direction === "right") {
        setLastAction({ index: currentIndex, wasUnknown: false });
      } else {
        setLastAction({ index: currentIndex, wasUnknown: true });
        setUnknownWords((prev) => [...prev, currentItem]);
      }

      setCurrentIndex((prev) => prev + 1);

      if (currentIndex + 1 >= totalWords) {
        setView("finished");
      }

      // Reset position and exit animation state for the next card
      setExitDirection(null);
      setDragX(0);
    }, 300);
  };

  const handleKnowIt = () => handleSwipeOut("right");
  const handleDontKnowIt = () => handleSwipeOut("left");

  // Keyboard Shortcuts
  useEffect(() => {
    if (view !== "flashcard" || !currentItem || exitDirection) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleKnowIt();
      else if (e.key === "ArrowLeft") handleDontKnowIt();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, view, currentItem, exitDirection]);

  const handleUndo = () => {
    if (!lastAction) return;
    if (lastAction.wasUnknown) {
      setUnknownWords((prev) => prev.slice(0, -1));
    }
    setCurrentIndex(lastAction.index);
    setLastAction(null);
    setDragX(0);
    setExitDirection(null);

    if (view === "finished") {
      setView("flashcard");
    }
  };

  const groupedStudyWords = useMemo(() => {
    const grouped = {};
    unknownWords.forEach(({ grade, domain, word }) => {
      if (!grouped[grade]) grouped[grade] = {};
      if (!grouped[grade][domain]) grouped[grade][domain] = [];
      grouped[grade][domain].push(word);
    });
    return grouped;
  }, [unknownWords]);

  const handleDownload = () => {
    let textContent = "";
    const grades = Object.keys(groupedStudyWords);

    grades.forEach((grade, gIndex) => {
      textContent += `${grade}\n\n`;
      const domains = Object.keys(groupedStudyWords[grade]);

      domains.forEach((domain, dIndex) => {
        textContent += `${domain}\n`;
        groupedStudyWords[grade][domain].forEach((word) => {
          textContent += `${word}\n`;
        });

        if (dIndex < domains.length - 1 || gIndex < grades.length - 1) {
          textContent += "\n";
        }
      });
    });

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vocabulary_to_study.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --- SWIPE / TOUCH HANDLERS ---
  const handleTouchStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragX(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold to trigger swipe action
    if (dragX > 100) {
      handleSwipeOut("right");
    } else if (dragX < -100) {
      handleSwipeOut("left");
    } else {
      setDragX(0); // Snap back to center
    }
  };

  // --- SUB-VIEWS ---

  const renderFlashcard = () => {
    if (!currentItem) return null;

    // Dynamically calculate transform styles for swipe animations
    const cardStyle = {
      transform: isDragging
        ? `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`
        : exitDirection === "right"
        ? `translateX(200vw) rotate(30deg)`
        : exitDirection === "left"
        ? `translateX(-200vw) rotate(-30deg)`
        : `translateX(0px) rotate(0deg)`,
      transition: isDragging
        ? "none"
        : "transform 0.3s ease-out, opacity 0.3s ease-out",
      opacity: exitDirection ? 0 : 1,
      touchAction: "pan-y", // Allows vertical scrolling while tracking X drags
    };

    return (
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto relative overflow-hidden pb-10 px-4">
        {/* Progress Bar & Header */}
        <div className="w-full mb-8 flex flex-col gap-2 relative z-0">
          <div className="flex justify-between text-sm text-slate-500 font-medium px-1">
            <span>
              Word {currentIndex + 1} of {totalWords}
            </span>
            <span>
              {Math.round((currentIndex / totalWords) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${(currentIndex / totalWords) * 100}%` }}
            />
          </div>
        </div>

        {/* The Swipeable Card Container */}
        <div className="relative w-full z-10" style={{ perspective: "1000px" }}>
          <div
            className="bg-white rounded-3xl shadow-xl w-full aspect-[4/3] flex flex-col items-center justify-center p-8 text-center relative border border-slate-100 cursor-grab active:cursor-grabbing select-none"
            style={cardStyle}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
          >
            {/* Overlay indicators that fade in while swiping */}
            <div
              className="absolute inset-0 bg-green-500 rounded-3xl z-20 flex items-center justify-center pointer-events-none transition-opacity duration-150"
              style={{
                opacity:
                  isDragging && dragX > 20
                    ? Math.min(dragX / 150, 0.4)
                    : exitDirection === "right"
                    ? 0.8
                    : 0,
              }}
            >
              <Check
                size={100}
                className="text-white opacity-90 drop-shadow-lg"
              />
            </div>
            <div
              className="absolute inset-0 bg-red-500 rounded-3xl z-20 flex items-center justify-center pointer-events-none transition-opacity duration-150"
              style={{
                opacity:
                  isDragging && dragX < -20
                    ? Math.min(Math.abs(dragX) / 150, 0.4)
                    : exitDirection === "left"
                    ? 0.8
                    : 0,
              }}
            >
              <X size={100} className="text-white opacity-90 drop-shadow-lg" />
            </div>

            <div className="absolute top-8 flex flex-col items-center gap-1 w-full px-6 z-10">
              <span className="text-sm font-bold tracking-widest text-slate-400 uppercase pointer-events-none">
                {currentItem.grade}
              </span>
              <span className="text-xs font-semibold tracking-wider text-blue-500 bg-blue-50 px-3 py-1 rounded-full uppercase text-center w-auto max-w-full truncate pointer-events-none">
                {currentItem.domain}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mt-12 mb-4 pointer-events-none">
              {currentItem.word}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full gap-4 mt-8 relative z-0">
          <button
            onClick={handleDontKnowIt}
            className="flex-1 bg-white border-2 border-red-200 hover:border-red-500 hover:bg-red-50 text-red-600 rounded-2xl py-5 font-bold text-lg flex flex-col items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md active:scale-95"
            title="Shortcut: Left Arrow"
          >
            <X size={28} />
            <span>Don't know it</span>
          </button>

          <button
            onClick={handleKnowIt}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-5 font-bold text-lg flex flex-col items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
            title="Shortcut: Right Arrow"
          >
            <Check size={28} />
            <span>Know it</span>
          </button>
        </div>

        {/* Undo Button */}
        <div className="h-10 mt-4 relative z-0">
          {lastAction && !exitDirection && (
            <button
              onClick={handleUndo}
              className="text-slate-500 hover:text-slate-800 flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <RotateCcw size={18} />
              Undo Last Word
            </button>
          )}
        </div>

        <p className="text-slate-400 text-sm mt-2 flex gap-4 pointer-events-none hidden sm:flex">
          <span>
            <kbd className="bg-slate-200 px-2 py-1 rounded text-xs text-slate-600">
              ←
            </kbd>{" "}
            / Swipe Left
          </span>
          <span>
            <kbd className="bg-slate-200 px-2 py-1 rounded text-xs text-slate-600">
              →
            </kbd>{" "}
            / Swipe Right
          </span>
        </p>
      </div>
    );
  };

  const renderStudyView = () => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-slate-100 min-h-[60vh]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <BookOpen className="text-blue-500" size={32} />
            Words to Study
          </h2>
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold">
            {unknownWords.length} words
          </div>
        </div>

        {unknownWords.length > 0 && (
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
          >
            <Download size={18} />
            Download Vocab
          </button>
        )}
      </div>

      {unknownWords.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <Trophy
            size={48}
            className="mx-auto text-yellow-400 mb-4 opacity-50"
          />
          <p className="text-lg">
            You haven't marked any words as unknown yet.
          </p>
          <p className="text-sm">Keep going through the flashcards!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {Object.entries(groupedStudyWords).map(([grade, domains]) => (
            <div key={grade} className="flex flex-col gap-6">
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                {grade}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(domains).map(([domain, words]) => (
                  <div
                    key={domain}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                  >
                    <h4 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 pb-2 border-b border-slate-200">
                      {domain}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {words.map((word, idx) => (
                        <li
                          key={idx}
                          className="text-slate-700 font-medium capitalize flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          {word}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderFinished = () => (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center border border-slate-100 relative">
      <Trophy size={80} className="mx-auto text-yellow-400 mb-6" />
      <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
        You're All Done!
      </h2>
      <p className="text-lg text-slate-600 mb-8">
        You've reviewed all {totalWords} words.
      </p>

      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        <button
          onClick={() => setView("study")}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-4 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <BookOpen size={24} />
          Study Unknown Words ({unknownWords.length})
        </button>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setUnknownWords([]);
            setLastAction(null);
            setView("flashcard");
          }}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl py-4 font-bold text-lg transition-all"
        >
          Start Over
        </button>
      </div>

      {lastAction && (
        <button
          onClick={handleUndo}
          className="mt-8 text-slate-400 hover:text-slate-600 flex items-center justify-center gap-2 font-medium transition-colors mx-auto"
        >
          <RotateCcw size={18} />
          Undo Last Word
        </button>
      )}
    </div>
  );

  if (vocabList.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-slate-500">
        Loading Vocabulary...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 p-4 md:p-8 flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between mb-8 z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white">
            <BookOpen size={24} />
          </div>
          <h1 className="font-extrabold text-xl tracking-tight text-slate-800 hidden sm:block">
            Vocab<span className="text-blue-600">Master</span>
          </h1>
        </div>

        {view === "flashcard" && (
          <button
            onClick={() => setView("study")}
            className="bg-white border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-600 rounded-xl px-4 py-2 font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
          >
            <BookOpen size={18} />
            Study Words{" "}
            <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md ml-1">
              {unknownWords.length}
            </span>
          </button>
        )}

        {(view === "study" || view === "finished") && (
          <button
            onClick={() => {
              if (currentIndex < totalWords) setView("flashcard");
            }}
            className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl px-4 py-2 font-bold text-sm flex items-center gap-2 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= totalWords && view !== "study"}
          >
            <ArrowLeft size={18} />
            Back to Flashcards
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full max-w-5xl mx-auto">
        {view === "flashcard" && renderFlashcard()}
        {view === "study" && renderStudyView()}
        {view === "finished" && renderFinished()}
      </main>
    </div>
  );
}
