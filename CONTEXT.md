# Vixen Pole Fitness

Marketing and info site for a pole fitness studio. Static content in `src/data/`, no CMS; actual class booking happens off-site through GoTeamUp, not on this site.

## Language

**Class type**:
A recurring class offering (`ClassType` in `src/data/classes.ts`): a name, a level, and a description of what to expect. Distinct from a scheduled session — this site lists the types the studio teaches, not a live timetable. Actual scheduling and booking live entirely in GoTeamUp.
_Avoid_: Course, program.

**Level**:
Who a class type is for: `Beginner`, `Intermediate`, or `All Levels`. Not a numeric skill rating, just a class-type field.
_Avoid_: Difficulty, tier.

**Booking**:
Reserving a spot in a class, done entirely through the embedded/linked GoTeamUp widget (`goteamupUrl` / `goteamupWidgetCode` in `src/data/content.ts`). This site has no booking logic of its own — it hands off to GoTeamUp for anything involving a schedule, a cart, or a payment.
_Avoid_: Reservation, sign-up (both fine as UI copy, but the mechanism is always GoTeamUp).

**Class pack**:
A prepaid bundle of class credits (`eightClassPack`, `fourClassPack` in `src/data/content.ts` pricing), expiring after a fixed window (`packExpiry`, currently 60 days). Distinct from `unlimitedMonthly` (recurring membership) and `dropIn` (single class, no commitment).
_Avoid_: Bundle, credits (the field names use "pack").

**Contract**:
A discounted commitment plan (`sixMonthContract`) — a fixed term at a flat price, distinct from the month-to-month `unlimitedMonthly` plan.
_Avoid_: Membership tier (there's no tiered membership system, just these four distinct pricing products: unlimited monthly, class packs, drop-in, and the six-month contract).

**Instructor specialty**:
The class types a given instructor teaches (`specialty` array in `src/data/instructors.ts`), used to connect instructors to class types on the Instructors page. Free-text strings, not IDs into `classTypes` — specialty names don't always match a `ClassType.name` exactly (e.g. "Pole Fitness" vs a specific class type), so don't assume they're joinable without checking.
