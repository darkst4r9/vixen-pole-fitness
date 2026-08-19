# Booking goes through GoTeamUp, not an in-house scheduling system

The site lists class types and instructors but has no schedule, cart, or payment logic of its own. All booking happens through an embedded/linked GoTeamUp widget. This avoids building and maintaining scheduling, payments, and class-capacity logic on a marketing site whose real job is content and conversion. The trade-off is that this site's `classes.ts` (what classes exist) and GoTeamUp's own class catalog (when/where they run) are two separate systems that can drift out of sync with no automated check between them.
